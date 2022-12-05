import {helpElement} from "../helpers/helpElement";
import {helpMediaQuery} from "../helpers/helpMediaQuery";

const GirlContactUs = () => {
  const mediaLg = helpMediaQuery("lg");
  return `
    <div
      id="ContainerGirlContactUs"
      class="d-none d-lg-block overflow-hidden rounded-4 mx-auto"
      data-change
    >
      ${
        mediaLg
          ? `<img src="./img/contactUs/girlContactUs.png" alt="..." class="w-100" />`
          : ""
      }
    </div>
  `;
};

helpElement({
  nameElement: "ContainerGirlContactUs",
  functionElement: GirlContactUs,
});

export const CallUs = () => {
  return `
    <div class="d-none d-lg-block p-5"></div>
    <section id="SectionCallUs" class="container-fluid position-relative">
      <div
        id="ContainerImageContactUs"
        class="position-absolute top-0 start-0 end-0 bottom-0 z-index-1 overflow-hidden"
      >
        <img
          src="./img/contactUs/fondo.webp"
          alt="..."
          class="w-100 h-100 position-relative z-index-2"
        />
      </div>
      <div class="container position-relative z-index-2">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col">
            ${GirlContactUs()}
          </div>
          <div class="col">
            <div class="py-5">
              <h2 class="text-light col-9 mb-4 font-openSans mx-auto mx-lg-0 text-center text-lg-start">
                You don’t have to see the whole staircase just take the first step
              </h2>
              <p class="text-light col-9 mb-4 font-openSans mx-auto mx-lg-0 text-center text-lg-start">
                Amet in a suspendisse convallis eget, Amet in a suspendisse
                convallis egetAmet in a
              </p>
              <div class="hstack flex-wrap gap-3 pt-4 justify-content-center justify-content-lg-start">
                <button
                  role="button"
                  class="btn btn-primary primary-2 fw-semibold fs-7"
                >
                  Get Started
                </button>
                <button role="button" class="btn btn-light light-2 fw-semibold fs-7">
                  Please a call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
