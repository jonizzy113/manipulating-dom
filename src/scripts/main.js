const section1= document.querySelector(".article__header");
const section2= document.querySelectorAll(".article__header");
for(let i = 0; i < section2.length; i++) {
    section2[i].classList.add("important")
  }

section1.textContent= "Welcome to the Jonathan Schaffer blog";

const section3= document.querySelector(".dashed");
section3.classList.remove("dashed")

const section4= document.querySelector(".article__footer");
section4.classList.add("goldenrod");

