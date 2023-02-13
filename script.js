const mainContainer = document.querySelector('.card')
const hiddenContainer = document.querySelector('.hidden')
const submitButton = document.getElementById('submit')
const rating = document.getElementById('rating')
const numbers = document.querySelectorAll('.number-background li')
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");





submitButton.addEventListener("click", () => {
    hiddenContainer.style.display = "flex"
    mainContainer.style.display = "none"});


num1.addEventListener("click", function() {
    console.log("1");
    highlightNumber(num1);
  });
  
  num2.addEventListener("click", function() {
    console.log("2");
    highlightNumber(num2);
  });
  
  num3.addEventListener("click", function() {
    console.log("3");
    highlightNumber(num3);
  });
  
  num4.addEventListener("click", function() {
    console.log("4");
    highlightNumber(num4);
  });
  
  num5.addEventListener("click", function() {
    console.log("5");
    highlightNumber(num5);
  });

  function highlightNumber(number) {
    const listItems = document.querySelectorAll(".number-background");
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("test");
    }
  
    number.classList.add("test");
  }
 
  numbers.forEach(number => {
    number.addEventListener('click', function() {
      rating.textContent = this.textContent;
    });
  });