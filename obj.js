const fredName = 'fred'
const fredEmail = 'fred@gmail.com'

keyName = "myName"

const obj = {
    [keyName]   : fredName,
    email       : fredEmail
}

for (let k in obj){
    console.info(`key=${k}, value=${obj[k]}`)
}