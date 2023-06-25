import { MainSlider, MiniSlider } from "./modules/slider/index";
import { VideoPlayer } from "./modules/index";

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const slider = new MainSlider({
    container: ".page",
    btns: ".next",
  });
  slider.render();

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

  const player = new VideoPlayer(".showup .play", ".overlay");
}
