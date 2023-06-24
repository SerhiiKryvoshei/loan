export class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay); // modal window
    this.close = this.overlay.querySelector(".close");

    this.init();
  }

  init() {
    // This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindTriggers();
    this.bindCloseBtn();
  }

  bindTriggers() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!document.querySelector("iframe#frame")) {
          const path = btn.getAttribute("data-url");
          this.createPlayer(path);
        }
        this.overlay.style.display = "flex";
      });
    });
  }

  bindCloseBtn() {
    this.close.addEventListener("click", () => {
      this.overlay.style.display = "none";
      this.player.stopVideo();
    });
  }

  createPlayer(url) {
    this.player = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: `${url}`,
    });
  }
}
