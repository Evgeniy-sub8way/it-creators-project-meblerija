const STAR_SPRITE = `img/star-rating.icons.svg`;

function starLi() {
  const s = STAR_SPRITE;
  return `<li class="star">
    <svg class="star-empty"><use href="${s}#star-empty"></use></svg>
    <svg class="star-half"><use href="${s}#star-half"></use></svg>
    <svg class="star-filled"><use href="${s}#star-filled"></use></svg>
  </li>`;
}

/**
 * Блок рейтингу для css-star-rating (5 зірок, SVG-спрайт з public).
 */
export function buildStarRatingDiv(rate) {
  const rating = Math.min(5, Math.max(0, Number(rate) || 0));
  const valueRating = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const halfClass = hasHalf ? 'half' : '';

  const stars = Array.from({ length: 5 }, starLi).join('');

  return `<div class="rating star-svg value-${valueRating} ${halfClass} color-default">
    <ul class="star-container">${stars}</ul>
  </div>`;
}
