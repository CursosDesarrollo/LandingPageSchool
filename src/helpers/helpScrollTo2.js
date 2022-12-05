import {helpVisuallyElement} from "./helpVisuallyElement";

export const helpScrollTo2 = (idScroll, idPrev, idNext) => {
  const getElement = id => {
      return document.getElementById(id);
    },
    ElementScroll = getElement(idScroll),
    ElementPrev = getElement(idPrev),
    ElementNext = getElement(idNext),
    execClick = (codition, direction, method) => {
      helpVisuallyElement(
        ElementScroll.children,
        ElementScroll.getBoundingClientRect(),
        codition,
        direction,
        method
      );
    },
    listenerPrev = () =>
      execClick((el1, el2) => el1 < el2, "left", "findLastIndex"),
    listenerNext = () =>
      execClick((el1, el2) => el1 > el2, "right", "findIndex");
  ElementPrev.addEventListener("click", listenerPrev);
  ElementNext.addEventListener("click", listenerNext);
};
