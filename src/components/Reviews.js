import {helpExecFunctions} from "../helpers/helpExecFunctions";
import {helpScrollTo2} from "../helpers/helpScrollTo2";
import {SvgNext} from "./common/SvgComponents/SvgNext";
import {SvgPrev} from "./common/SvgComponents/SvgPrev";

const CardsReview = () => {
  const element = (srcImg, name, job) => `
    <div class="cardReview rounded shadow-card-2 p-3 flex-shrink-0">
      <div class="hstack gap-2 mb-3">
        <div class="overflow-hidden rounded-circle containerImgPerfil">
          <img src="${srcImg}" alt="..." class="w-100 h-100" />
        </div>
        <div class="vstack">
          <h4 class="h6 text-black m-0">${name}</h4>
          <p class="m-0 text-primary fs-7 fw-semibold">${job}</p>
        </div>
      </div>
      <div>
        <p class="m-0 fs-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi
          saepe dolor omnis soluta quibusdam quia perferendis numquam nisi tenetur
          qui nostrum odit, possimus nesciunt placeat.
        </p>
      </div>
    </div>
  `,
    elements = [
      ["/img/review/perfil1.jpg", "Mohh Jumah", "Senior Developer"],
      ["/img/review/perfil2.jpg", "John Mark", "Data Analyst"],
      ["/img/review/perfil3.jpg", "Rabiu Hassan", "Marketer"],
      ["/img/review/perfil4.jpg", "Mheyah Khalifa", "Ux Lead"],
      ["/img/review/perfil5.jpeg", "Elon Musk", "Content Writer"],
    ];
  return `
    <div class="col-12 col-lg-8">
      <div id="ContainerCardsReview" class="hstack scroll-x not-scroll-hover p-2 gap-3">
        ${elements.map(val => element(...val)).join("")}
      </div>
    </div>
  `;
};

const ElementLeft = () => {
  return `
    <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column mb-4 mb-lg-0">
      <h3 class="h1 mb-0 mb-lg-5 text-black lh-base">
        What our
        <span class="position-relative"
          ><span class="text-primary">Students</span
          ><img
            src="/img/review/SvgFigure2.svg"
            alt="..."
            class="w-100 position-absolute start-0 figure-bottom"
        /></span>
        say about us
      </h3>
      <div class="hstack gap-4 gap-lg-5">
        <div
          role="button"
          class="d-flex justify-content-center rounded-circle align-items-center btn prevOuter"
          style="width: 50px; height: 50px"
          id="prev3"
        >
          <span class="d-block" style="width: 30px">
            ${SvgPrev()}
          </span>
        </div>
        <div
          role="button"
          class="d-flex justify-content-center rounded-circle align-items-center btn nextOuter"
          style="width: 50px; height: 50px"
          id="next3"
        >
          <span class="d-block" style="width: 30px">
            ${SvgNext()}
          </span>
        </div>
      </div>
    </div>
  `;
};

helpExecFunctions.addFunction(() =>
  helpScrollTo2("ContainerCardsReview", "prev3", "next3")
);

export const Reviews = () => {
  return `
    <section class="container mb-5">
      <header class="mb-4 mb-lg-5">
        <h2 class="h4 fw-normal-2 fw-lg-semibold m-0 text-center">Reviews</h2>
      </header>
      <div class="row">
        ${ElementLeft()}
        ${CardsReview()}
      </div>
    </section>
  `;
};
