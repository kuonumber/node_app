var jimmy = {
    name : 'Jimmy',
    mobile : '0910123123',
    isOpen : false
}
var rita = {
    name : 'Rita',
    mobile : '0910321321',
    isOpen : true 
}

var tom = {
    name : 'Tom',
    mobile : '0925321321',
    isOpen : true
}

let user = new Map()

user.set('jimmy',jimmy)
user.set('rita',rita)
user.set('tom',tom)

// console.log(typeof user)
// console.log(user.size)
// console.log(user.keys())
// console.log(user.values())
// console.log(user.get('jimmy'))

for (const key of user.keys()){
    console.log(key)
}

for (const value of user.values()){
    console.log(value)
}

for (const[key, value] of user.entries()){
    console.log(key, value.name)
}

user.forEach((value, key) => console.log(value.name, key))

let newMap = new Map(user)
console.log(newMap) 
