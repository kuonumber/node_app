age = 20
var drink = age > 18 ? 'beer':'water';
console.log(drink)

var job = 'teacher'

switch(job){
    case 'teacher' :
        console.log('hey, teacher');
        break;
    case 'student' :
        console.log('hey, student');
        break;
    default:
        console.log('hello, who are you');
}

var age = 30

switch(age){
    case age < 18:
        console.log('he is a boy');
        break
    case age > 18 && age <= 25:
        console.log('he is a young man');
        break
    case 35 > age && age >25:
        console.log('he is a man');
        break
}

var height = 0 ;

if (height|| height === 0) {
    console.log('it is defined')
}else{
    console.log('it is not defined')
}

