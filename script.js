// alert('hi')

const myparam = document.querySelectorAll('p')
// myparam.forEach((p) => { p.textContent = 'Fxx' })
myparam.forEach(function(p) { 
    p.remove() 
})
