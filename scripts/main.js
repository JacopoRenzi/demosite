    // const myHeading = document.querySelector("h1");
    // myHeading.textContent = "Hello world!";

    // myVariabile=[2,"bob","gioe",10];
    // console.log(myVariabile[3]);

    // let iceCream = "chocolate";
    // if (iceCream === "chocolate") {
    // alert("Yay, I love chocolate ice cream!");
    // } else {
    // alert("Awwww, but chocolate is my favorite…");
    // }

//dichiarazione di funzione
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  //esecuzione della funzione
  multiply(4,6);
  //scrittura 
  console.log(multiply(4,6));

  //appena clicco viene fuori popup
    // document.querySelector("html").addEventListener("click", function () {
    //     alert("Ouch! Stop poking me!");
    // });
  
  //cambiare immagine quando si clicca:
  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName); //in modo che se il nome noon è stato inserito lo salva e lo tiene in memoria
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };