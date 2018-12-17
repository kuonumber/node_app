var winnerIs = {
    John : [89, 120, 103],
    Mike : [116, 94, 123],
    Mary : [97, 134, 105],
    avg : function(arg){
        let sum = 0
        let sum_ = arg.forEach(function(value,index){sum += value});
        this.avg = (sum_/this.arg.values.length)
}}

winnerIs.avg(John)

// winnerFunction = winnerIs.John.forEach( (score, index)=> {
//     score += score ;
//     return score;
//     // let avg = score/index+1;
//     // console.log(avg);
// })
// console.log(winnerFunction())




