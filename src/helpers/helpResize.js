import {helpMediaQuery} from "./helpMediaQuery";

const cleanFunctions = new Map();

const cleanElement = element => {
  const newElement = document.createElement("div");
  newElement.innerHTML = element;
  return newElement.innerHTML;
};

export const helpResize = elements => {
  window.addEventListener("resize", () => {
    const elementsRender = document.querySelectorAll("[data-change]");
    elementsRender.forEach(val => {
      const idElement = val.id,
        configElement = elements.get(idElement),
        newElement = cleanElement(configElement.functionElement());
      if (val.outerHTML.trim() != newElement.trim()) val.outerHTML = newElement;
      if (!configElement.execFunction) return;
      if (cleanFunctions.has(configElement.nameElement)) {
        const funcExec = cleanFunctions.get(configElement.nameElement);
        funcExec();
        cleanFunctions.delete(configElement.nameElement);
      }
      if (helpMediaQuery(configElement.resize)) {
        const funcClean = configElement.execFunction.func();
        if (funcClean) cleanFunctions.set(configElement.nameElement, funcClean);
      }
    });
  });
  elements.forEach(val => {
    if (!val.execFunction) return;
    if (!helpMediaQuery(val.resize)) return;
    const execFunction = val.execFunction,
      funcClean = execFunction.func();
    if (funcClean) cleanFunctions.set(val.nameElement, funcClean);
    if (helpMediaQuery(val.resize)) execFunction.exec = true;
  });
};
