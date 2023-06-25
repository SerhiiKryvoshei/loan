import { MainSlider, MiniSlider } from "./modules/slider/index";
import { VideoPlayer } from "./modules/index";

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const slider = new MainSlider({ page: ".page", btns: ".next" });
  slider.render();

  const player = new VideoPlayer(".showup .play", ".overlay");

  const sliderMini = new MiniSlider({ page: ".page", btns: ".next" });
}
