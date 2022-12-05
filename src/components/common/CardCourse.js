const Price = price => {
  return `<p class="m-0 h5 text-primary">${price}$</p>`;
};

export const CardCourse = (
  imgSrc,
  title,
  score,
  price,
  students,
  weeks,
  id
) => {
  return `
    <div
      class="overflow-hidden rounded-2 shadow-card-1 card-custom-1 position-relative card-type-${id}"
    >
      <div class="container-img-card">
        <img src="${imgSrc}" alt="..." class="w-100 h-100" />
      </div>
      <div class="body-card p-2 p-lg-3 vstack gap-lg-4 fw-normal-2">
        <header class="hstack">
          <div class="flex-grow-1">
            <h3 class="h5 fw-normal-2 text-break">${title}</h3>
          </div>
          <div class="hstack h-max-c gap-1">
            <img src="./img/popularCourse/SvgStar.svg" alt="..." class="svg-star" />
            <p class="m-0 text-black">${score}</p>
          </div>
        </header>
        <div class="d-lg-none mb-3 mt-2">${Price(price)}</div>
        <div class="hstack gap-2">
          <div>
            <p class="m-0">${weeks}</p>
          </div>
          <div class="flex-grow-1">
            <div class="hstack gap-1">
              <img
                src="./img/popularCourse/SvgPersons.svg"
                alt="..."
                class="svg-persons"
              />
              <p class="m-0">${students}</p>
            </div>
          </div>
          <div class="d-none d-lg-block">${Price(price)}</div>
        </div>
      </div>
      <a href="#" class="position-absolute top-0 bottom-0 end-0 start-0"></a>
    </div>
  `;
};
