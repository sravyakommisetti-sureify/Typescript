function addition(num1: number, num2: number): number{
  return num1 + num2
}

function subtraction(num1: number, num2: number): number{
  return num1-num2
}

function multiply(num1: number, num2: number): number{
  return num1*num2
}

function division(num1: number, num2: number): number | string{
  if (num2 !== 0)
  return num1/num2
  else{
    return 'Cant perform division'
  }
}

export { addition, subtraction, multiply, division }