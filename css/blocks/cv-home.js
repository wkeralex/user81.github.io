

const textDefault = "Ermachenya Alecsandr"; 
const delay = 200;
const domElement = document.querySelector(".cv-home__heading-title");
domElement.textContent = "";

const printText = (text, domElement, delay) => {
  if (text.length > 0) {
    domElement.innerHTML += text[0];
    setTimeout(() => printText(text.slice(1), domElement, delay), delay);
  }else {
    setTimeout(() => {
      domElement.textContent = "";
      printText(textDefault, domElement, delay);
      }, (delay* 20));
  }
}

printText(textDefault, domElement, delay);



