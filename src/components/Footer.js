import {helpElement} from "../helpers/helpElement";
import {helpMediaQuery} from "../helpers/helpMediaQuery";

const links1 = ["Home", "Services", "Training", "Resources", "About Us"],
  links2 = ["SME", "Solution", "Reviews", "Blog"],
  links3 = ["Contact Us", "Place a Call", "Wischool@gmail.com"],
  links4 = ["Job Opening", "News", "Research"],
  links5 = ["Uk Privacy Policy", "Terms of Use"];

const Links = (elements = []) => {
  const element = name =>
    `<a href="#" class="text-decoration-none text-light font-openSans text-break">${name}</a>`;
  return `
    <div class="vstack gap-3">
      ${elements.map(val => element(val)).join("")}
    </div>
  `;
};

const SocialNetworks = () => {
  const elementImg = srcImg => `
      <a href="#" class="text-decoration-none">
        <img src="${srcImg}" alt="..." class="socialNetworks" />
      </a>
    `,
    elements = [
      "./img/footer/SvgFacebook.svg",
      "./img/footer/SvgTwitter.svg",
      "./img/footer/SvgInstragram.svg",
      "./img/footer/SvgLinkedin.svg",
    ];
  return `
    <div id="SocialNetworks" class="vstack align-items-lg-start pb-5 pb-lg-0">
      <h4 class="text-light mb-lg-4 font-sourceSansPro">WiSchool</h4>
      <p class="text-light col-9 d-none d-lg-block">
        We are not here to sell you products, we sell value through our
        expertise.
      </p>
      <div class="hstack gap-3">
        ${elements.map(val => elementImg(val)).join("")}
      </div>
    </div>
  `;
};

const Background = () => {
  return `
    <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex gap-4">
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
    </div>
  `;
};

const InputElement = () => {
  return `
    <div
      class="vstack align-items-start align-items-lg-center gap-0 gap-lg-3 position-relative z-index-2 col-md-10 mx-auto col-lg-6 mx-auto mt-lg-5"
    >
      <h3 class="text-light fw-normal-2 fs-6 fs-lg-3">Subscribe to get latest updates</h3>
      <div class="input-group flex-nowrap mb-lg-5">
        <input
          type="email"
          name="EmailSubscribe"
          id="EmailSubscribe"
          class="form-control rounded-0"
          placeholder="Your Email address"
        />
        <button id="Btn-primary-subscribe" class="btn btn-primary rounded-0">
          Subscribe
        </button>
      </div>
    </div>
  `;
};

const Desktop = () => {
  return `
    ${Background()}
    <div class="p-4"></div>
    <div class="position-relative z-index-2 hstack gap-3 py-5">
      ${SocialNetworks()}
      ${Links(links1)}
      ${Links(links2)}
      ${Links(links3)}
      ${Links(links4)}
      ${Links(links5)}
    </div>
    ${InputElement()}
  `;
};

const Movil = () => {
  return `
    ${InputElement()}
    <div class="hstack gap-2 gap-sm-3 py-5">
      ${Links(links1)}
      ${Links(links2)}
      ${Links(links3)}
    </div>
    ${SocialNetworks()}
  `;
};

export const Footer = () => {
  const mediaLg = helpMediaQuery("lg");
  return `
    <section id="FooterMain" class="container-fluid bg-black pt-5 pt-lg-0" data-change>
      <div class="container position-relative p-lg-0">
        ${mediaLg ? Desktop() : Movil()}
      </div>
    </section>
  `;
};

helpElement({
  nameElement: "FooterMain",
  functionElement: Footer,
});
