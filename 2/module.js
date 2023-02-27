//Сложение
function sum(a,b) {
    let aNum = a.split("").reverse();
    let bNum = b.split("").reverse();
    let result = [];
    let next = 0;
    for (let i = 0; i < aNum.length; i++) {
        let firstNum = parseInt(aNum[i]) || 0;
        let secondNum = parseInt(bNum[i]) || 0;
        let sum = firstNum + secondNum + next;
        result.push(sum % 10);
        next = Math.floor(sum / 10);
    }
    if (next > 0) {
        result.push(next);
    }
    return result.reverse().join("");
}
// Вычитание
function subtract(a,b) {
    let aNum = a.split("").reverse();
    let bNum = b.split("").reverse();
    let result = [];
    let bor = 0;

    for (let i = 0; i < Math.max(aNum.length, bNum.length); i++) {
        let firstNum = parseInt(aNum[i]) || 0;
        let secondNum = parseInt(bNum[i]) || 0;

        let difference = firstNum - secondNum - bor;

        if (difference < 0) {
            difference += 10;
            bor = 1;
        } else {
            bor = 0;
        }
        result.push(difference);
    }
    return result.reverse().join("");
    
}
// Умножение
function mult(a,b) {
    let aNum = a.split("").reverse();
    let bNum = b.split("").reverse();
    let result = [];
    for (let i = 0; i < a.length + b.length; i++) {
        result[i] = 0;
    }
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            result[i + j] += parseInt(aNum[i]) * parseInt(bNum[j]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        let digit = result[i] % 10;
        let next = Math.floor(result[i] / 10);
        result[i] = digit;
        if (result[i + 1]) {
            result[i + 1] += next;
        } else if (next !== 0){
            result[i + 1] = next;
        }
    }
    return result.reverse().join("");
    
}
// Деление
function divide(a,b) {
      let quotient = "";
      let remainder = 0;
    
      for (let i = 0; i < a.length; i++) {
        let currentDiv = remainder * 10 + parseInt(a[i]);
        let currentQuot = Math.floor(currentDiv / b);
        remainder = currentDiv % b;
        quotient += currentQuot;
      }
    
      while (quotient.length > 1 && quotient[0] == "0") {
        quotient = quotient.slice(1);
      }
    
      return quotient;
}

let num = "5712895712893571209";
let num1 = "23159023789502342";
console.log(sum(num,num1));
console.log(subtract(num,num1));
console.log(mult(num,num1));
console.log(divide(num,num1));