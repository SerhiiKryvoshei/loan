export class Form {
  constructor(forms, url) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll("input");
    this.message = {
      loading: "Загрузка...",
      success: "Спасибо! Скоро мы с вами свяжемся!",
      failure: "Что-то пошло не так...",
    };
    this.path = url;

    this.init();
  }

  init() {
    this.checkMailInputs();
    this.initMask();

    this.forms.forEach((item) => {
      item.addEventListener("submit", (e) => {
        e.preventDefault();

        const statusMessage = document.createElement("div");
        statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `;
        item.parentNode.appendChild(statusMessage);

        statusMessage.textContent = this.message.loading;

        const formData = new FormData(item);
        const strJSON = JSON.stringify(Object.fromEntries(formData));
        this.postData(this.path, strJSON)
          .then((res) => {
            console.log(res);
            statusMessage.textContent = this.message.success;
          })
          .catch(() => {
            statusMessage.textContent = this.message.failure;
          })
          .finally(() => {
            this.clearInputs();
            setTimeout(() => {
              statusMessage.remove();
            }, 5000);
          });
      });
    });
  }

  async postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: data,
    });
    return await response.json();
  }

  clearInputs() {
    this.inputs.forEach((item) => {
      item.value = "";
    });
  }

  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');

    mailInputs.forEach((input) => {
      input.addEventListener("keypress", function (e) {
        if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
          e.preventDefault();
        }
      });
    });
  }

  initMask() {
    let setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    };

    function createMask(event) {
      let matrix = "+1 (___) ___-____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });

      if (event.type === "blur") {
        if (this.value.length == 2) {
          this.value = "";
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll('[name="phone"]');

    inputs.forEach((input) => {
      input.addEventListener("input", createMask);
      input.addEventListener("focus", createMask);
      input.addEventListener("blur", createMask);
    });
  }
}
