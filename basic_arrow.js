const greeting = (name) => console.log(` hello, ${name}`)

greeting('Jimmy')

const nameList = [{
    'Joe' : true,
    'say' : 'hello'
},{ 'Tom' : true,
    'say' : 'hey'
}]

const sayHey = nameList.filter((name)=> name.say==='hello')

console.log(sayHey)