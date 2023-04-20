//! when u run, line 17 runs first, while promise is still taking time, then completes after 3 s

// create a promise
let p = new Promise(
    (resolve,reject)=>{


        // perform operations
        setTimeout(
            ()=>{
                console.info('>> SQL complete')
                //! data passed in is 'success' string
                resolve('success!')
                // reject('error!!!')
            },
            2000 //3 sec
        )
    }
)

 p
    .then(
        v => {
            console.info(`Promise resolved: ${v}`)
            // throw "ERRORR!!!"
            return v.toUpperCase() // whatever that is returned is returned as a promise
        }
    ).then( // and then you can call then again on the promise
        (
            v=>{
                console.info(`Second then: ${v}`)
                return v+v
            }
        )
    ).then( // and then you can call then again on the promise
        (
            v=>{
                console.info(`third then: ${v}`)
            }
        )
    )
    .catch(err=>{
        console.error(`Error: ${err}`)
        return "recovered from error"
    })
    .then(
        v=>{
            console.info(`after catch:${v}`)
        }
    )
    
    
console.info("after new Promise")