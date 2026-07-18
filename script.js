/**
 * Render orange-slice ratings from data-rating values.
 * Supports whole and half ratings from 0 to 5, such as 3.5.
 */
const FULL_SLICE = 'assets/orange-full.svg';
const HALF_SLICE = 'assets/orange-half.svg';

function renderSliceRating(container) {
  const rawRating = Number.parseFloat(container.dataset.rating ?? '0');
  const rating = Math.max(0, Math.min(5, Math.round(rawRating * 2) / 2));
  const wholeSlices = Math.floor(rating);
  const hasHalfSlice = rating % 1 !== 0;

  container.replaceChildren();
  container.setAttribute('aria-label', `${rating} out of 5 orange slices`);
  container.title = `${rating} out of 5`;

  for (let index = 0; index < wholeSlices; index += 1) {
    container.append(createSlice(FULL_SLICE, 'Full orange slice'));
  }

  if (hasHalfSlice) {
    container.append(createSlice(HALF_SLICE, 'Half orange slice', true));
  }
}

function createSlice(src, alt, isHalf = false) {
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  image.className = `orange-slice${isHalf ? ' half' : ''}`;
  image.width = 36;
  image.height = 36;
  return image;
}

document.querySelectorAll('.slice-rating').forEach(renderSliceRating);

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
