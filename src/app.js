import {Nav} from "./components/Nav";
import {Header} from "./components/Header";
import {FavouriteCourse} from "./components/FavouriteCourse";
import {PopularCourses} from "./components/PopularCourses";
import {LearnSkill} from "./components/LearnSkill";
import {BringEducation} from "./components/BringEducation";
import {Reviews} from "./components/Reviews";
import {Instructors} from "./components/Instructors";
import {CallUs} from "./components/CallUs";
import {Footer} from "./components/Footer";

export const app = () => {
  return `
    ${Nav()}
    ${Header()}
    <main>
      ${FavouriteCourse()}
      ${PopularCourses()}
      ${LearnSkill()}
      ${BringEducation()}
      ${Reviews()}
      ${Instructors()}
      ${CallUs()}
    </main>
    ${Footer()}
  `;
};
