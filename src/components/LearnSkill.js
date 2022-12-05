import {helpElement} from "../helpers/helpElement";
import {helpMediaQuery} from "../helpers/helpMediaQuery";
import {helpScrollTo1} from "../helpers/helpScrollTo1";
import {CardCourse} from "./common/CardCourse";
import {NextAndPrevElement} from "./common/NextAndPrevElement";

const Cards = () => {
  const elements = [
    [
      "./img/learnSkill/imgCard4.jpg",
      "All you need in Business Strategy",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/learnSkill/imgCard3.jpg",
      "The amazing hack in Figma prototyping",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/learnSkill/imgCard1.jpg",
      "Introduction to basic game developement",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/learnSkill/imgCard7.jpg",
      "Introduction to front-end development",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/learnSkill/imgCard2.jpg",
      "Use surveyMonkey to create a survey",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/learnSkill/imgCard6.jpg",
      "Get started with First aid",
      "4.5",
      "30.5",
      "1.5k Students",
      "6 weeks",
    ],
    [
      "./img/learnSkill/imgCard5.jpg",
      "Everrything you need to know in UX",
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
      ${CardCourse(...val, 2)}
    </div>
  `
    )
    .join("");
};

const NextAndPrev = () => {
  const mediaLg = helpMediaQuery("lg");
  return `
    <div id="PrevAndNext2" data-change>
      ${mediaLg ? NextAndPrevElement("prev2", "next2") : ""}
    </div>
  `;
};

helpElement({
  nameElement: "PrevAndNext2",
  functionElement: NextAndPrev,
  execFunction: {
    func: () => helpScrollTo1("ContainerCardsLearnSkill", "prev2", "next2"),
    exec: false,
  },
  resize: "lg",
});

export const LearnSkill = () => {
  return `
    <section class="container mb-5">
      <header class="mb-2">
        <h2 class="h4 fw-normal-2 fw-lg-semibold">Learn a new skill in two hours</h2>
      </header>
      <div class="position-relative">
        <div
          id="ContainerCardsLearnSkill"
          class="hstack gap-2 gap-lg-3 pb-1 pt-3 scroll-x"
        >
          ${Cards()}
        </div>
        ${NextAndPrev()}
      </div>
    </section>
  `;
};
