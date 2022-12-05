const elements = new Map();

export const helpElement = (element = {}) => {
  const {nameElement} = element;
  if (nameElement) elements.set(nameElement, element);
  return elements;
};
