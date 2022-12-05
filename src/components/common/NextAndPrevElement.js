import {SvgNext} from "./SvgComponents/SvgNext";
import {SvgPrev} from "./SvgComponents/SvgPrev";

export const NextAndPrevElement = (idPrev, idNext) => {
  return `
    <div role="button" id="${idPrev}" class="position-absolute top-50 translate-middle-y">
      <div
        class="d-flex justify-content-center align-items-center rounded-circle btn prevInner"
        style="width: 50px; height: 50px"
      >
        <span class="d-block" style="width: 30px">
          ${SvgPrev()}
        </span>
      </div>
    </div>
    <div role="button" id="${idNext}" class="position-absolute top-50 translate-middle-y nextInner">
      <div
        class="d-flex justify-content-center align-items-center rounded-circle btn nextInner"
        style="width: 50px; height: 50px"
      >
        <span class="d-block" style="width: 30px">
          ${SvgNext()}
        </span>
      </div>
    </div>
  `;
};
