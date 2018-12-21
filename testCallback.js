// setTimeout(() => {
//     console.log(3)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(1)
//             setTimeout(() => {
//                 console.log(0)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
}).then(() => new Promise((resolve, reject) => {
    console.log(3)
    setTimeout(resolve, 1000)
})).then(() => new Promise((resolve, reject) => {
    console.log(2)
    setTimeout(resolve, 1000)
})).then(() => new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(resolve, 1000)
})).then(() => new Promise((resolve, reject) => {
    console.log(0)
}))

async function fn () {
    for (let i=3; i>=0; i--) {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 1000)
        })
        

        console.log(i)
    }
}
