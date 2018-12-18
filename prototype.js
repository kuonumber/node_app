var Person = function(name, birthYear, job){
    this.name = name;
    this.birthYear = birthYear;
    this.job = job
}

Person.prototype.calAge = function() { 
    console.log(2018 - this.birthYear)
}


// Person.prototype.calAge = () =>  console.log(2018 - this.birthYear)


Person.prototype.lastName = 'KUO'

var Jimmy = new Person('Jimmy', 1988, 'computer enginner')

Jimmy.calAge()

console.log(Jimmy)