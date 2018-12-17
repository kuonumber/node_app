let myTodo = {
    'dayOfweek' : 'monday',
    'taskType' : 'js ',
    'totalTasks' : 1,
    'isDone' : 5,
    addMeeting : function(num){
        this.totalTasks = this.totalTasks + num  
    },
    addTask : function(task){
        this.taskType = this.taskType + task
    },
    summary : function(){
        return `now tasks are ${this.taskType}`   
    }
}
myTodo.addMeeting(4)
myTodo.addTask('python')
console.log(myTodo.summary())
