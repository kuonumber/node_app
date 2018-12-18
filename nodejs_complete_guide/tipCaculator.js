
//if (bill<50){
//   tip = bill * 0.2
//    bill = bill + tip
//}

var tipCal  = {
    rate : [0.2, 0.15, 0.10],
    cal: function(bill){
        if (bill < 50) {
        this.tip = bill * this.rate[0];
        // bill += bill * this.rate[0]
        bill = bill + this.tip;
        }else if((bill >= 50 && bill <= 200)) {
        this.tip = bill * this.rate[1];
        bill = bill + this.tip;
        }else{
        this.tip = bill * this.rate[2];
        bill = bill + this.tip;
        
        }
        this.bill = bill
        return bill}
}
tipCal.cal()
console.log(tipCal.cal(50))
console.log(tipCal)