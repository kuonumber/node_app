var romeNumber = {
    I : 1,
    v : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
    abs : (number1,number2)=> -(number2-number1),
}

console.log(romeNumber['I']+romeNumber['M'])
console.log(romeNumber.abs(10,8))
