function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 !== 0)
        return num1 / num2;
    else {
        return 'Cant perform division';
    }
}
export { addition, subtraction, multiply, division };
