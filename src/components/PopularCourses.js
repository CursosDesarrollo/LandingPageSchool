import {CardCourse} from "./common/CardCourse";

const Cards = () => {
  const elements = [
    [
      "./img/popularCourse/imgCard1.jpg",
      "Learn Marketing from Top Instructors",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/popularCourse/imgCard2.jpg",
      "Front-end development is not hard as you think",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/popularCourse/imgCard3.jpg",
      "Everrything you need to know in UX",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/popularCourse/imgCard4.jpg",
      "Learn photography with ease",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/popularCourse/imgCard5.jpg",
      "Be a pro in data analysis",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/popularCourse/imgCard6.jpg",
      "Ethical Harking is not hard as you think",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
  ];
  return elements
    .map(
      val => `
    <div class="col">
      ${CardCourse(...val, 1)}
    </div>
  `
    )
    .join("");
};

export const PopularCourses = () => {
  return `
    <section class="container mb-5">
      <header class="hstack mb-4">
        <div class="flex-grow-1">
          <h2 class="h4 fw-normal-2 fw-lg-semibold">Most Popular courses</h2>
        </div>
        <div>
          <div role="button" class="bg-primary rounded-5 dropdown-custom-1 hstack px-3 py-1">
            <div style="width: 30px; height: 30px">
              <img
                src="./img/popularCourse/SvgIconDropdown1.svg"
                alt="..."
                class="w-100"
              />
            </div>
            <span class="ms-1 d-block text-light w-max-c">Sort by</span>
          </div>
        </div>
      </header>
      <div class="row row-cols-2 row-cols-lg-3 gx-3 gy-4">
        ${Cards()}
      </div>
    </section>
  `;
};
