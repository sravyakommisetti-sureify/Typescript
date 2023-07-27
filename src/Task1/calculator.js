"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.division = exports.multiply = exports.subtraction = exports.addition = void 0;
function addition(num1, num2) {
    return num1 + num2;
}
exports.addition = addition;
function subtraction(num1, num2) {
    return num1 - num2;
}
exports.subtraction = subtraction;
function multiply(num1, num2) {
    return num1 * num2;
}
exports.multiply = multiply;
function division(num1, num2) {
    if (num2 !== 0)
        return num1 / num2;
    else {
        return 'Cant perform division';
    }
}
exports.division = division;
