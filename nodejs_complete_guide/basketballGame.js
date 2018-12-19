var winnerIs = {
    'John' : [89, 120, 103],
    'Mike' : [116, 94, 123],
    'Mary' : [97, 134, 105]
}

var avg = []
Object.keys(winnerIs).forEach(function(key){
    let sum = 0;
    let i = 0;
    winnerIs[key].forEach(function(value,index){
        sum += value;
        i++        
    })
    console.log(sum);
    avg[key] = (sum/i);
})

var winner = winnerIs
console.log(winner, avg)

// for (var i = 0; i < winnerIs.v; i++){
//     winnerIs[i].forEach(function(value,index){
//     sum += value
// }


//     avg : function(){
//         let sum = 0,
//         for (var i = 0; i < winnerIs.length; i++){
//             winnerIs[i].forEach(function(value,index){
//             sum += value
//         },
//         this.avg = (sum_/winnerIs.length)
//             )
//     }
// }}
