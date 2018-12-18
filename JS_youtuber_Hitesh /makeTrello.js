let myTodo = {
    'dayOfweek' : 'monday',
    'taskType' : 'js learning',
    'totalTasks' : 1,
    'isDone' : 5
}


let addMeeting = function (todo, task, noOftask=0) {
    todo.taskType = todo.taskType + task
    todo.totalTasks = todo.totalTasks + noOftask
}

let addDone = function (todo, noOfDone) {
    todo.isDone = todo.isDone + noOfDone
}

let daySummary = function(todo){
    console.log(`Today is ${todo.dayOfweek}`);
    console.log(`You have ${todo.totalTasks} tasks now. And the list of tasks is ${[todo.taskType]}.`);
    console.log(`Already done ${todo.isDone} todos, keep going!`);

}

addMeeting(myTodo,', python', 2)
addDone(myTodo, 3)
// console.log(myTodo)
daySummary(myTodo)