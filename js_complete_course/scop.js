var number1 = 1;
func1();

function func1(){
    var number2 = 2;
    func2();
    function func2(){
        var number3 = 3
        console.log(number1.toString() + number2.toString() + number3.toString())
        func3()
        console.log(number1)
    }
}

function func3(){
    var number4 = 4
    // console.log(number3)
}
console.log(number1)