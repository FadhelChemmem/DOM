function articlePlus(e) {
    e.target.closest('.article').querySelector('.nbr').innerHTML++;
    calculTotal(1, p = e.target.closest('.article').querySelector('.prix').innerHTML);
}
function articleMinus(e) {
    if (e.target.closest('.article').querySelector('.nbr').innerHTML > 0) {
        e.target.closest('.article').querySelector('.nbr').innerHTML--;
        calculTotal(-1, e.target.closest('.article').querySelector('.prix').innerHTML);
    };
}
function calculTotal(n, p) {
    el = Number(document.getElementById('totalArticles').innerHTML);
    let totalModification = Number(el) + Number(p) * Number(n);
    document.getElementById('totalArticles').innerHTML = totalModification;
}
function articleDelete(e){
    e.target.closest('.article').remove();
}
function modifierCouleur(e){
    e.target.closest('.article').style.backgroundColor  = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
}


/*
// get inputs
let inputs = document.querySelectorAll("input");
// get input values (email, name, phone)
// validate input values
let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let nameRegEx = /[a-z]+/;
let numberRegEx = /[0-9]+/;
let error = document.createElement("p");
let submitBtn = document.querySelector("button");
submitBtn.disabled = true;
submitBtn.style.backgroundColor = "grey";
error.innerText = "Please enter a valid email";
error.style.color = "red";
error.style.fontSize = "12px";

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", function () {
    switch (inputs[i].name) {
      case "email":
        validate(inputs[i], emailRegEx);
        //document.getElementsByClassName("email")[0].appendChild(error);
        break;
      case "name":
        validate(inputs[i], nameRegEx);
        break;
      case "phone":
        validate(inputs[i], numberRegEx);
        break;
      default:
        break;
    }
    checkIsFilled()
  });
}

function checkIsFilled(e) {
  for (let i = 0; i < inputs.length - 1; i++) {
    console.log("test");
    if (inputs[i].value == "" || inputs[i].style.border === "1px solid red") {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "grey";
      return false;
    }
  }
  submitBtn.disabled = false;
  submitBtn.style.backgroundColor = "white";
  console.log("type de reg", typeof (nameRegEx));
}

function validate(input, regEx) {
  if (input.value.match(regEx)) {
    input.style.border = "1px solid green";
  } else {
    input.style.border = "1px solid red";
  }
}

let logo = document.querySelector("#logo");

logo.addEventListener("click", function () {
  if (logo.style.color == "red") {
    logo.style.color = "black";
  } else {
    logo.style.color = "red";
  }
});

function increment(value) {
  return value + 1;
}

function decrement(value) {
  return value - 1;
}

let inc = document.querySelectorAll(".increment");
let dec = document.querySelectorAll(".decrement");
let value = document.querySelectorAll(".value");

for (let i = 0; i < inc.length; i++) {
  inc[i].addEventListener("click", function () {
    value[i].innerText = increment(parseInt(value[i].innerText));
  });
}

for (let i = 0; i < dec.length; i++) {
  dec[i].addEventListener("click", function () {
    if (parseInt(value[i].innerText) > 1) {
      value[i].innerText = decrement(parseInt(value[i].innerText));
    }
  });
}

