const ElementImageRounded = () => {
  const elements = [],
    element = (left = 0) => `
    <span
      class="d-inline-block overflow-hidden rounded-circle border border-light border-3 position-relative ElementImageRounded"
      style="right: ${left}px;"
    >
      <img src="/img/header/SrHipster.jpg" alt="..." class="w-100" />
    </span>
  `;
  for (let index = 0; index < 5; index++) elements.push(element(15 * index));
  return elements.join("");
};

const ElementRight = () => {
  return `
    <div
      class="position-absolute vstack rounded-3 p-2 bg-light shadow-c1 ElementRight"
    >
      <div style="width: 30px" class="align-self-center">
        <img src="/img/header/SvgPerson.svg" alt="..." class="w-100" />
      </div>
      <div>
        <p class="text-primary fw-bolder h5 text-center">15K</p>
        <p class="vstack text-center m-0 h6" style="font-size: 0.7rem;">
          <span>Amazing</span>
          <span>students around</span>
          <span>the globe</span>
        </p>
      </div>
    </div>
  `;
};

const ElementLeft = () => {
  return `
    <div
      class="position-absolute vstack rounded-3 p-3 bg-light translate-middle-x shadow-c1 ElementLeft"
    >
      <p class="h6 vstack text-center">
        <span>Learn from best</span
        ><span><span class="text-primary">instructors</span> around</span
        ><span>the globe</span>
      </p>
      <div class="position-relative overflow-hidden" style="height: 32px">
        <div class="position-absolute d-flex">
          ${ElementImageRounded()}
        </div>
      </div>
    </div>
  `;
};

const ElementOption = (title, srcImg) => {
  return `
    <div class="col d-flex justify-content-center">
      <div class="hstack gap-2 p-2 bg-tertiary flex-grow-1 customElementOption">
        <div style="width: 40px;">
          <img src="${srcImg}" alt="..." class="w-100">
        </div>
        <span class="fw-semibold">${title}</span>
      </div>
    </div>
  `;
};

const DecorationRight = id => {
  return `<span id="DecorationRight${id}" class="position-absolute top-0 end-0 bottom-0 bg-fourth decorationRight"> </span>`;
};

const ContainerOptions = () => {
  const options = [
    ["Problem Solving", "/img/header/SvgOption1.svg"],
    ["Live chat", "/img/header/SvgOption2.svg"],
    ["Group Reading", "/img/header/SvgOption3.svg"],
    ["10k Courses", "/img/header/SvgOption4.svg"],
    ["Hand-on activities", "/img/header/SvgOption5.svg"],
  ];
  const elements = options.map(val => ElementOption(...val)).join("");
  return `
    <div class="mt-5 position-relative">
      <div class="row mx-0 gx-3 gy-3 ">
        ${elements}
      </div>
    </div>
  `;
};

export const Header = () => {
  return `
    <header class="container my-3">
      <div id="ContainerHeader1" class="bg-secondary bg-lg-transparent py-5 position-relative">
        <div id="ContainerHeader2" class="bg-lg-secondary d-flex flex-wrap rounded-lg-5 px-lg-4 py-lg-5 position-relative">
          <div id="ContainerTittleHeader" class="vstack gap-4 mt-4 col-12 col-lg-6 align-self-center position-relative">
            <h1 class="vstack fs-x gap-2 text-black">
              <span>Quality <span class="text-primary">Education</span></span>
              <span>By Any Means</span>
              <span>Necessary.</span>
            </h1>
            <div>
              <button id="GetStarted" class="btn btn-primary btn-lg fw-bolder">Get Started</button>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-5 mt-lg-0 col-12 col-lg-6 position-relative">
            <div class="col-10 position-relative ContainerElementImage">
              <div class="rounded-5 overflow-hidden position-relative">
                <img
                  src="/img/header/GirlStudent.jpg"
                  alt="..."
                  id="MainImageHeader"
                />
              </div>
              ${ElementLeft()} ${ElementRight()}
            </div>
          </div>
          ${DecorationRight(1)}
        </div>
        ${ContainerOptions()}
        ${DecorationRight(2)}
      </div>
    </header>
  `;
};
