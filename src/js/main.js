import { MainSlider, MiniSlider } from "./modules/slider/index";
import {
  VideoPlayer,
  Difference,
  Form,
  ShowInfo,
  Download,
} from "./modules/index";

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const slider = new MainSlider({
    container: ".page",
    btns: ".next",
  });
  slider.render();

  const modulePageSlider = new MainSlider({
    container: ".moduleapp",
    btns: ".next",
  });
  modulePageSlider.render();

  const showUpSlider = new MiniSlider({
    container: ".showup__content-slider",
    next: ".showup__next",
    prev: ".showup__prev",
    activeClass: "card-active",
    animate: true,
  });

  const modulesSlider = new MiniSlider({
    container: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
    autoplay: true,
  });

  const feedSlider = new MiniSlider({
    container: ".feed__slider",
    prev: ".feed__slider .slick-prev",
    next: ".feed__slider .slick-next",
    activeClass: "feed__item-active",
  });

  new VideoPlayer(".showup .play", ".overlay");
  new VideoPlayer(".module__video-item .play", ".overlay");

  new Difference(".officerold", ".officernew", ".officer__card-item");

  new Form(".form", "https://jsonplaceholder.typicode.com/posts");

  new ShowInfo(".plus__content");

  new Download(".download");
}
