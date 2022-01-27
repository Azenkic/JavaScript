"use strict";

let userInput = document.getElementById("userInput");

let expression = "";

//kada nesto ude u funkciju onclikc ,kada nesto ude u nju, da spremimo u parametar (numebr), te taj number dodajemo u string

function press(num) {
  expression += num;
  userInput.value = expression;
}

//posebna funkcija za jednakost i erase jer nisu press

function erase() {
  expression = "";
  userInput.value = expression; //vraca ga na vrijednost expression = "". <-- 0;
}

function equal() {
  userInput.value = eval(expression); //izracunaj ono sto je User utipko
}
