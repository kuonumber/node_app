const myTodos = [{
    'title' : 'do exercise',
    'isDone' : true,
},{    
    'title' : 'go shopping',
    'isDone' : true,
},{
    'title' : 'sleep',
    'isDone' : false,
}]

// const content_index = myTodos.findIndex(function(thing, index){
//     console.log(thing)
//     return thing.title === 'sleep'
// })

// console.log(content_index)

const findTodo = function(eachTodo, title){
    const index = eachTodo.findIndex(function(thing, index){
        return thing.title.toLowerCase() === title.toLowerCase()
    })
    return eachTodo[index]
}

console.log(findTodo(myTodos, 'sleep'))

console.log(myTodos[0])


const findTodo2 = function(eachTodo, title){
    const index = eachTodo.findIndex(function(thing, index){
        return thing.title.toLowerCase() === title.toLowerCase()
    })
    return eachTodo
}

console.log(findTodo(myTodos, 'sleep'))

