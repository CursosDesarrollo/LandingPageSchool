import {helpVisuallyElement} from "./helpVisuallyElement";

const displayPrevAndNext = (
  DataElementScroll,
  ElementsChildren,
  ElementPrev,
  ElementNext
) => {
  const DataFirstElement = ElementsChildren[0].getBoundingClientRect(),
    DataLastElement =
      ElementsChildren[ElementsChildren.length - 1].getBoundingClientRect();
  if (DataElementScroll.left == DataFirstElement.left)
    ElementPrev.classList.add("d-none");
  else ElementPrev.classList.remove("d-none");
  if (DataElementScroll.right == DataLastElement.right)
    ElementNext.classList.add("d-none");
  else ElementNext.classList.remove("d-none");
};

export const helpScrollTo1 = (idScroll, idPrev, idNext) => {
  console.log("fasd");
  const getElement = id => {
      return document.getElementById(id);
    },
    ElementScroll = getElement(idScroll),
    ElementPrev = getElement(idPrev),
    ElementNext = getElement(idNext);
  displayPrevAndNext(
    ElementScroll.getBoundingClientRect(),
    ElementScroll.children,
    ElementPrev,
    ElementNext
  );
  const execClick = (codition, direction, method) => {
      helpVisuallyElement(
        ElementScroll.children,
        ElementScroll.getBoundingClientRect(),
        codition,
        direction,
        method
      );
      displayPrevAndNext(
        ElementScroll.getBoundingClientRect(),
        ElementScroll.children,
        ElementPrev,
        ElementNext
      );
    },
    listenerPrev = () =>
      execClick((el1, el2) => el1 < el2, "left", "findLastIndex"),
    listenerNext = () =>
      execClick((el1, el2) => el1 > el2, "right", "findIndex");
  ElementPrev.addEventListener("click", listenerPrev);
  ElementNext.addEventListener("click", listenerNext);
  return () => {
    console.log("exec");
    ElementPrev.removeEventListener("click", listenerPrev);
    ElementNext.removeEventListener("click", listenerNext);
  };
};
