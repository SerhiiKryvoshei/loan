import { Slider } from "./slider";

export class MiniSlider extends Slider {
  constructor({ page, btns }) {
    super({ page, btns });
    console.log("Hello MiniSlider");
  }
}
