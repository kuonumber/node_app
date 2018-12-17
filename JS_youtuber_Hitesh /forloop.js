const days = [ 'Mon', 'Tue', 'Wed', 'Thr', 
'Fri', 'Sat', 'Sun']


/* 
for (let index = 0; index < days.length; index++) {
    const element = days[index];
    console.log(element);
}
*/

days.forEach(function( day, index){
    console.log(`${day}, ${index+1}`)
  }
)




