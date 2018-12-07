let sayHello= function greeting(name) {
    console.log('welcome')
    console.log(`${name}`);
}

sayHello('Jimmy kuo')


let sayHello2= function nameList(param1, param2) {
    console.log('welcome')
    console.log(`${param1} & ${param2}`);
}

sayHello2('Jimmy kuo', 'Tom Kuo')


let myAdder = function name(num1,num2) {
    let result = num1 * num2
    return result 
}


let result = myAdder(2,3)
console.log(result)

function myAdderDefault(name='Default',money='100') {
    console.log('your name is ' + name, 
    `and have ${money} in bank.`)
}

myAdderDefault()