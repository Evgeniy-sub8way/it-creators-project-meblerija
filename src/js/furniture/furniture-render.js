// ---------- Categories-markup ----------

const SLUGS = [
  'all-products',
  'sofas',
  'wardrobes',
  'beds',
  'tables',
  'chairs',
  'kitchens',
  'kids',
  'office',
  'hallway',
  'bathroom',
  'outdoor',
  'decor',
];

export function createCategoriesMarkup(categories) {
  return categories
    .map((category, index) => {
      const categoryClass = SLUGS[index] || 'default';
      return `
        <li class="category-item">
          <button
            class="category-btn ${categoryClass}"
            type="button"
            data-category="${category._id}">
            ${category.name}
          </button>
        </li>
      `;
    })
    .join('');
}

// ---------- Card-markup ----------

export function createFurnitureMarkup(items) {
  return items
    .map(item => {
      const { _id, name, images = [], color = [], price = 0 } = item;
      const imgSrc = images[0] || 'placeholder.jpg';
      const colors = Array.isArray(color) ? color : [color];

      return `
        <li class="furniture-item">
          <div class="furniture-thumb">
            <img
              src="${imgSrc}"
              alt="${name}"
              width="400"
              height="300"
              loading="lazy"
            />
          </div>
          <div class="furniture-info">
            <h3 class="furniture-heading">${name}</h3>
                <div class="container-colors">
                  <ul class="furniture-color">
                      ${colors
                        .map(
                          color => `
                        <li>
                          <svg width="24" height="24">
                            <circle cx="12" cy="12" r="12" fill="${color}" />
                          </svg>
                        </li>
                      `
                        )
                        .join('')}
                   </ul>
               </div>
                    <p class="furniture-price">${price} грн</p>
          </div>
             <button class="details-btn btn-furniture" data-id="${_id}" type="button">Детальніше</button>
        </li>
      `;
    })
    .join('');
}

export function appendFurniture(container, items) {
  container.insertAdjacentHTML('beforeend', createFurnitureMarkup(items));
}
