const sayHello = function (params) {
    console.log(`${params}`);
}

sayHello('Jimmy')

const hello = (name) => {
    return `hello, ${name}`
}
console.log(hello('Peter'))

const sayHi = (name) => `hello, ${name}`

console.log(sayHi('Tom'))

const todos = [{
    title : 'go Swimming',
    isDone : true,
},{
    title : 'go shopping',
    isDone : true,
},{
    title : 'take a break',
    isDone : false
}]

const isTrue = todos.filter((todo) => todo.isDone === true)
console.log(isTrue)

const camera ={
    price : 1000,
    madeIn : 'Taiwan',
    desc : function(){
        return `the price is ${this.price * 0.8}`
    }
}

console.log(camera.desc())