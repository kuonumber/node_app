
var person = {
    name : 'jimmy',
    phone : '168168',
    birthYear : 1988,
    yearNow : 2018,
    calAge : function() {
        this.age = this.yearNow - this.birthYear;
    }
};
person.calAge();
console.log()