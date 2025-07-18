const head = document.querySelector(".head")
const counter = document.querySelector(".counter")
const btn1 =document.querySelector("#btn1")
const btn2 =document.querySelector("#btn2")
const btn3 =document.querySelector("#btn3")

let count = 0;
  btn1.addEventListener("click", function() {
     count--;
  counter.textContent = count;
});

  btn2.addEventListener("click", function() {
     count =0;
  counter.textContent =-count;
});


  btn3.addEventListener("click", function() {
     count++;
  counter.textContent = count;
});
















































    
//     const btn1 = document.getElementsByClassName("btn")
// for (let i = 0; i < btn1.length; i++) {
//     btn1[i].addEventListener("click", function () {
//         alert("Button clicked");
//     });
// }