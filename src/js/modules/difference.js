export class Difference {
  constructor(oldOfficer, newOfficer, items) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.oldItems = this.oldOfficer.querySelectorAll(items);
    this.newItems = this.newOfficer.querySelectorAll(items);
    this.oldCounter = 0;
    this.newCounter = 0;

    this.init();
  }

  init() {
    console.log("hey");
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);

    this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
    this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
  }

  hideItems(items) {
    items.forEach((item, i, arr) => {
      // all but the last
      if (i !== arr.length - 1) {
        item.style.display = "none";
      }
    });
  }

  bindTriggers(container, items, counter) {
    container.querySelector(".plus").addEventListener("click", () => {
      items[counter].style.display = "flex";
      items[counter].classList.add("animated", "slideInDown");

      if (counter !== items.length - 2) {
        counter++;
      } else {
        items[items.length - 1].remove();
      }
    });
  }
}
