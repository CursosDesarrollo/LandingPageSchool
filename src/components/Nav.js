import {helpElement} from "../helpers/helpElement";
import {helpMediaQuery} from "../helpers/helpMediaQuery";

const id = "navChange";

const Logo = () => {
  return `
    <div class="flex-grow-1 flex-lg-grow-0">
      <div role="button" class="ms-3" style="width: 130px">
        <img src="./img/navBar/SvgLogo.svg" alt="..." class="w-100" />
      </div>
    </div>
  `;
};

const Search = () => {
  return `
    <div style="width: 25px;" role="button">
      <img src="./img/navBar/SvgSearch.svg" alt="..." class="w-100">
    </div>
  `;
};

const Buttons = () => {
  return `
    <div class="d-flex gap-2">
      <button type="button" class="btn btn-light text-primary fw-bold">Login</button>
      <button type="button" class="btn btn-primary fw-bold">Register</button>
    </div>
  `;
};

const AnimationLink = (mediaLg, name) => {
  const element = `
    <span class="original-name fw-normal-2">${name}</span>
    <div class="vstack AnimationLink position-absolute animationLink">
      <span>${name}</span>
      <span class="fw-normal-2">${name}</span>
    </div>
  `;

  return `
    <a class="nav-link overflow-hidden position-relative" ${
      !mediaLg ? `data-bs-dismiss="offcanvas"` : ""
    } href="#">${mediaLg ? element : name}</a>
  `;
};

const Menu = () => {
  const mediaLg = helpMediaQuery("lg");
  return `
    <ul
      id="MenuMain"
      class="navbar-nav flex-lg-grow-1 gap-4 justify-content-lg-center font-openSans"
      data-change
    >
      <li class="nav-item">${AnimationLink(mediaLg, "Home")}</li>
      <li class="nav-item">${AnimationLink(mediaLg, "Courses")}</li>
      <li class="nav-item">${AnimationLink(mediaLg, "Instructor")}</li>
      <li class="nav-item">${AnimationLink(mediaLg, "Schedules")}</li>
      <li class="nav-item">${AnimationLink(mediaLg, "Contact Us")}</li>
    </ul>
  `;
};

helpElement({
  nameElement: "MenuMain",
  functionElement: Menu,
});

const Desktop = () => {
  return `
    ${Logo()}
    ${Menu()}
    ${Search()}
    ${Buttons()}
  `;
};

const OffCanvasMenu = () => {
  return `
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header justify-content-end">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body vstack gap-5">
        ${Menu()}
        <div class="hstack justify-content-around">
          ${Search()}
          ${Buttons()}
        </div>
      </div>
    </div>
  `;
};

const Movil = () => {
  return `
    <div role="button" style="width: 35px" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
      <img src="./img/navBar/SvgMenu.svg" alt="..." class="w-100" />
    </div>
    ${Logo()}
    <div role="button" style="width: 35px">
      <img src="./img/navBar/SvgLogin.svg" alt="..." class="w-100" />
    </div>
    ${OffCanvasMenu()}
  `;
};

const Nav = () => {
  const mediaLg = helpMediaQuery("lg");
  const classMedia = {
    movil: "container-fluid hstack px-4 py-3 shadow-c2",
    desktop: "navbar navbar-expand-lg navbar-padding-y-4 mx-5 gap-2",
  };
  return `
    <nav
      id="${id}"
      class="${mediaLg ? classMedia.desktop : classMedia.movil}"
      data-change
    >
      ${!mediaLg ? Movil() : ""} 
      ${mediaLg ? Desktop() : ""}
    </nav>
  `;
};

helpElement({
  nameElement: id,
  functionElement: Nav,
});

export {Nav};
