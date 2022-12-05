import {helpElement} from "../helpers/helpElement";
import {helpMediaQuery} from "../helpers/helpMediaQuery";
import {helpScrollTo1} from "../helpers/helpScrollTo1";
import {NextAndPrevElement} from "./common/NextAndPrevElement";

const DescriptionCourse = () => {
  return `
    <p class="descriptionCourse d-none d-lg-block fs-7">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, id. Alias
      esse ab a! Temporibus.
    </p>
  `;
};

const CardsFavouriteCourse = () => {
  const element = (title, imgSrc) => `
    <div class="position-relative card-favourite-course rounded rounded-lg-0 overflow-hidden flex-shrink-0">
      <div class="position-relative h-100">
        <img src="${imgSrc}" alt="..." class="w-100 h-100"/>
        <div
          id="DescriptionCardFavouriteCourse"
          class="d-flex justify-content-center justify-content-lg-end align-items-center align-items-lg-start flex-lg-column position-absolute top-0 start-0 end-0 bottom-0"
        >
          <h3 class="text-light fs-5 fs-lg-4 text-center ps-lg-3 pb-lg-1">${title}</h3>
          ${DescriptionCourse()}
        </div>
      </div>
      <a href="#" class="position-absolute top-0 start-0 end-0 bottom-0"></a>
    </div>
  `,
    elements = [
      ["Marketing", "./img/favouriteCourse/marketing.jpg"],
      ["Technology", "./img/favouriteCourse/technology.jpg"],
      ["Photography", "./img/favouriteCourse/photography.jpg"],
      ["Cooking", "./img/favouriteCourse/cooking.jpg"],
      ["Design", "./img/favouriteCourse/design.jpg"],
      ["Programming", "./img/favouriteCourse/programming.jpg"],
      ["Helth and Care", "./img/favouriteCourse/helthAndCare.jpg"],
    ];
  return elements.map(val => element(...val)).join("");
};

const NextAndPrev = () => {
  const mediaLg = helpMediaQuery("lg");
  return `
    <div id="PrevAndNext1" data-change>
      ${mediaLg ? NextAndPrevElement("prev1", "next1") : ""}
    </div>
  `;
};

helpElement({
  nameElement: "PrevAndNext1",
  functionElement: NextAndPrev,
  execFunction: {
    func: () =>
      helpScrollTo1("ContainerCardsFavouriteCourse", "prev1", "next1"),
    exec: false,
  },
  resize: "lg",
});

export const FavouriteCourse = () => {
  return `
    <section class="container vstack mb-5">
      <header class="d-flex align-items-center mb-3 mb-lg-4">
        <div class="flex-grow-1">
          <h2 class="col-8 h4 fw-normal-2 fw-lg-semibold m-0">
            Choose favourite course from top cartegories
          </h2>
        </div>
        <a href="#" class="text-black text-decoration-none text-nowrap fs-5"
          >See all</a
        >
      </header>
      <div class="position-relative">
        <div
          id="ContainerCardsFavouriteCourse"
          class="hstack gap-2 gap-lg-3 py-1 scroll-x"
        >
          ${CardsFavouriteCourse()}
        </div>
        ${NextAndPrev()}
      </div>
    </section>
  `;
};
