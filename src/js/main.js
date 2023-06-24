import { Slider, VideoPlayer } from "./modules/index";

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const slider = new Slider(".page", ".next");
  slider.render();

  const player = new VideoPlayer(".showup .play", ".overlay");
}
