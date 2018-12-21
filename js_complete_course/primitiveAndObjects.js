// primitive
var a = 12
var b = a 
a = 36
console.log(a)
console.log(b)


// object 

var object1 = {
    name : 'Tom',
    age : 26
};

var object2 = object1;
object1.age = 62;
object2.age = 28;
console.log(object2.age)
console.log(object1.age)

function change(a,b){
    a = 40,
    b.city = 'Taipei'
}

var age1 = 25;
var city = 'Taichung'

change(age1, city)

console.log(age1)
console.log(city)
// 25
// Taichung
