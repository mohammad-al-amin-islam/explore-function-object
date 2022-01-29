function addition(num1,num2){
    var total = num1 + num2;
    return total;
}

function subtraction(num1,num2){
    var result = num1 - num2;
    return result;
}


function multiplication(num1,num2){
    var result = num1 * num2;
    return result;
}

function divission(num1,num2){
    var result = num1 / num2;
    return result;
}
var firstNumber = 30;
var secondNumber = 10;
var resultOfAddition = addition (firstNumber,secondNumber);
var resultOfSubtractiion = subtraction (firstNumber,secondNumber);
var resultOfMultiplication = multiplication (firstNumber,secondNumber);
var resultOfDivission = divission (firstNumber,secondNumber);

console.log('addition',resultOfAddition);
console.log('subtraction',resultOfSubtractiion);
console.log('multiplication',resultOfMultiplication);
console.log('Divission',resultOfDivission);
