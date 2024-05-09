const promiseone = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("set timeout method")
        resolve()
    })
})

promiseone.then(function(){
    console.log("then block")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("set timeout method 2")
        resolve()
    })
}).then(function(){
    console.log("Then block 2")
})


const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username : "Chaithanya Krishna",
            email : "example@gmail.com"
        })
    },1000)
})


promisethree.then(function(user){
    console.log(user.username);
    console.log(user.email);
})


// promise four
promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                username:"Arun Kumar",
                email :"arun@example.com"
            })
        }
        else{
            reject("Something went Wrong")
        }
    },1000)
})


promisefour
.then(function(user){
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("Promise Four Completed")
})

// promise five

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username:"Rama Krishna",
                email :"Rama@example.com"
            })
        }
        else{
            reject("ooops 404")
        }
    },1000)
});


async function consumePromiseFive(){
    try{
        const response = await promisefive
        console.log(response);   
    }
    catch (error){
        console.log('Error in promise Five')
    }
}
consumePromiseFive();



// api data 

// using the fetch method

// fetch("https://api.github.com/users/ChaithanyaKrishna28")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log("Error Ocuured in fetching")
// })


// usign async await

async function fetchingUsingAsyncAndAwait(){
    try{
        const response = await fetch('https://api.github.com/users/ChaithanyaKrishna28')
        const data = await response.json()
        console.log(data.name)
    }
    catch(error){
        console.log("Something is fishy")
    }
}

fetchingUsingAsyncAndAwait()
