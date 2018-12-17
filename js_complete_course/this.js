var John = {
    name : 'John',
    nickName : 'Fish',
    phone : '090909',
    memberNo : 1 
}

var person = function( name, nickName, phone, memberNo, birthYear){
    this.name = name;
    this.nickName = nickName;
    this.phone = phone;
    this.memberNo = memberNo;
    this.birthYear = birthYear
}

person.prototype.ageCal = () => console.log( 2018 - this.birthYear)

var Tom = new person('Tom', 'Lion', 080808, 123123, 1988);

console.log(Tom)

// console.log(person('Tom', 'Lion', 080808, 123123, 1988))

Tom.ageCal()