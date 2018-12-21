function interviewFunction(job){
    return function(name){
        if (job === "teacher"){
            console.log(name + ', I love teacher' );
        }else if (job === 'enginner'){
            console.log(`Hi, ${name} , I am also an enginner.`)
        }
    }
}

interviewFunction('enginner')('Tom')