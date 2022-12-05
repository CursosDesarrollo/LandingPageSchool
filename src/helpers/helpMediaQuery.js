const MediaQuery = {
  xs: "0",
  s: "433px",
  sm: "500px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const helpMediaQuery = size => {
  const configMediaQuery = window.matchMedia(
    `(min-width: ${MediaQuery[size]})`
  );
  return configMediaQuery.matches;
};
