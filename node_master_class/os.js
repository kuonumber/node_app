const os = require('os')

let totalMeM = os.totalmem();
let freeMem = os.freemem();

console.log(`totalMeM = ${totalMeM} , freeMem =  ${freeMem}`)