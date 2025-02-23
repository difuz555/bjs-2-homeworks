"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    arr.push(-b / 2 * a);
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
percentInMonth = percent / 100 / 12;
let s = amount - contribution;
let monthlyPayment = s * (percentInMonth + (percentInMonth / (((1 + percentInMonth) ** countMonths) - 1)));
let total = monthlyPayment * countMonths;
total = Number(total.toFixed(2));
return total;
}