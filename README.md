# Seattle Negroni Review

A static, four-page blog designed for GitHub Pages.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload every file and the `assets` folder from this project.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.

## Add a review

Open `index.html` and duplicate the full `<article class="review-card">...</article>` block.

Set the score with:

```html
<div class="slice-rating" data-rating="3.5"></div>
```

Supported scores run from `0` to `5` in half-point increments.
