const InformationRight = () => {
  return `
    <div class="col">
      <div class="col-lg-10 mb-3">
        <h3 class="h1 fw-normal-2 fw-lg-semibold m-0">Let Your Education Do The Walking</h3>
      </div>
      <div class="vstack gap-3 gap-lg-4">
        <div class="hstack gap-2">
          <span
            class="d-flex justify-content-center align-items-center bg-tertiary svgItem1 rounded-circle"
            ><img src="/img/bringEducation/SvgBook.svg" alt="..."
          /></span>
          <p class="m-0 fw-normal-2 flex-grow-1">Free E-book, Videos and kits</p>
        </div>
        <div class="hstack gap-2">
          <span
            class="d-flex justify-content-center align-items-center bg-tertiary svgItem1 rounded-circle"
            ><img src="/img/bringEducation/SvgTime.svg" alt=".."
          /></span>
          <p class="m-0 fw-normal-2 flex-grow-1">Learn at your own pace</p>
        </div>
        <div class="hstack gap-2">
          <span
            class="d-flex justify-content-center align-items-center bg-tertiary svgItem1 rounded-circle"
            ><img src="/img/bringEducation/SvgJob.svg" alt="..."
          /></span>
          <p class="m-0 fw-normal-2 flex-grow-1">
            Collaborate with different learners around the globe
          </p>
        </div>
        <div class="hstack gap-2">
          <span
            class="d-flex justify-content-center align-items-center bg-tertiary svgItem1 rounded-circle"
            ><img src="/img/popularCourse/SvgPersons.svg" alt="..."
          /></span>
          <p class="m-0 fw-normal-2 flex-grow-1">
            Top instructors around the globe
          </p>
        </div>
      </div>
    </div>
  `;
};

const ImageLeft = () => {
  return `
    <div class="col mb-5 mb-lg-0">
      <div class="col-10 col-sm-9 position-relative ContainerElementImage2 mx-sm-auto">
        <div class="rounded-5 overflow-hidden position-relative">
          <img
            src="/img/bringEducation/fondo.jpg"
            alt="..."
            id="MainImageBringEducation"
          />
        </div>
        <div
          class="position-absolute bg-light rounded-3 p-2 start-100 top-50 translate-middle-x vstack align-items-center shadow-c1 gap-2"
        >
          <div
            class="rounded-circle d-flex justify-content-center align-items-center bg-tertiary"
            id="SvgJob1"
          >
            <img src="/img/bringEducation/SvgJob.svg" alt="..." />
          </div>
          <div class="text-center vstack align-items-center mb-3">
            <span class="d-block position-relative">
              <span class="text-primary h5">Job</span>
              <img
                src="/img/bringEducation/SvgFigure1.svg"
                alt="..."
                class="w-100 position-absolute start-0 figure-bottom"
              />
            </span>
            <span class="d-block fw-normal-2">Opportunities</span>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const BringEducation = () => {
  return `
    <section class="container mb-5">
      <header class="mb-4 mb-lg-5">
        <h2 class="h4 fw-normal-2 fw-lg-semibold m-0">
          We Bring The Good Education To Life
        </h2>
      </header>
      <div class="row row-cols-1 row-cols-lg-2">
        ${ImageLeft()}
        ${InformationRight()}
      </div>
    </section>
  `;
};
