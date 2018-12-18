var isGlobal = 'global'

if(true){
    console.log(isGlobal);
    isGlobal = 'globalInlocal'
    console.log(isGlobal);
    let isLocal = 'local'
    // var isLocal can globalise isLocal
}

console.log(isLocal)
