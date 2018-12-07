function gradeCal(score) {   
    if (score >= 90){
        grade = 'A'
    }else if ( 90 > score >= 70){
        grade = 'B'
    }else{
        grade = 'c'
    }
    return grade
}

console.log(gradeCal(90))