export const helpVisuallyElement = (
  ElementsChildren,
  DataElementScroll,
  condition,
  direction,
  method
) => {
  const indexOut = [...ElementsChildren][method](element =>
    condition(
      element.getBoundingClientRect()[direction],
      DataElementScroll[direction]
    )
  );
  if (indexOut > -1)
    ElementsChildren[indexOut].scrollIntoView({block: "center"});
};
