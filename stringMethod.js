let account = 'asanewmember'
let password = '123456'
account.length
function checker(account, password){
    if ((account.length>6) && (password.length>6)) {
        console.log('this is a valid account.')
    } else{
        console.log('this is not a valid account.')
    }   
}

checker(account, password)
