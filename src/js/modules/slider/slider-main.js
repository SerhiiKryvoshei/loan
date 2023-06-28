import { Slider } from "./slider";

export class MainSlider extends Slider {
  constructor({ btns, container }) {
    super({ btns, container });
    console.log(this);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    try {
      this.hanson.style.opacity = "0";
      if (n === 3) {
        this.hanson.classList.add("animated");
        setTimeout(() => {
          this.hanson.style.opacity = "1";
          this.hanson.classList.add("slideInUp");
        }, 3000);
      } else {
        this.hanson.classList.remove("slideInUp");
      }
    } catch (error) {}

    // this.slides.forEach((slide) => {
    //   return (slide.style.display = "none");
    // });
    Array.prototype.forEach.call(
      this.slides,
      (slide) => (slide.style.display = "none")
    );

    this.slides[this.slideIndex - 1].style.display = "block";
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  bindTriggers() {
    this.btns.forEach((item) => {
      item.addEventListener("click", () => {
        this.plusSlides(1);
      });

      item.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    document.querySelectorAll(".prevmodule").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(-1);
      });
    });

    document.querySelectorAll(".nextmodule").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(1);
      });
    });
  }

  render() {
    if (this.container) {
      try {
        this.hanson = document.querySelector(".hanson");
      } catch (e) {}

      this.showSlides(this.slideIndex);
      this.bindTriggers();
    }
  }

  // renderOld() {
  //   if (this.container) {
  //     this.hanson = document.querySelector(".hanson");

  //     this.btns.forEach((btn) => {
  //       btn.addEventListener("click", (e) => {
  //         e.stopPropagation();
  //         e.preventDefault();
  //         this.plusSlides(1);
  //       });

  //       btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
  //         e.preventDefault();
  //         this.slideIndex = 1;
  //         this.showSlides(this.slideIndex);
  //       });
  //     });

  //     this.showSlides(this.slideIndex);
  //   }
  // }
}
