const empty_list = []

empty_list.push('Jordan')
empty_list.push('Jimmy')
empty_list.push('Joey')

empty_list.forEach(function (bookingOrder, index) {
    console.log(`The order man is ${bookingOrder},
     and the order is no. ${index}`)
})

for (let i = 0; i < empty_list.length; i++) {
    const element = empty_list[i];
    console.log(`The order man is ${element},
     and the order is no. ${i}`)
}