export class Slider {
  constructor(page, btns) {
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
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

  render() {
    try {
      this.hanson = document.querySelector(".hanson");
    } catch (error) {}

    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => this.plusSlides(1));

      btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.showSlides(this.slideIndex);
  }
}
