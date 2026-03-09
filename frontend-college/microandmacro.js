//micro and macro tasks in js
//js is single threaded programming
//event loop= continously check for the work / tasks - manage everything
//call stack - the place where js keep track of every function or task 
//push the task, run, pop

//2. Task queues
//async operation - it will added to special task queues

//micro task queue - high priority task
//promise then catch finally
//queuemicrotask()


//macro task queue - less priority task
//settimeout i/o events
//ul events - click scroll
//other async callbacks

console.log("hello")
setTimeout(()=>{
    console.log("hello1")
})
Promise.resolve().then(()=>{
    console.log("hello2")
})
console.log("hello3")

console.log("customer order")
setTimeout(()=>{
    console.log("prepare pizza")// macrotask big task
})
Promise.resolve().then(()=>{
    console.log("add extra cheese") // microtask here
})
console.log("make payment")

fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data=>{
    console.log("random user ", data.results[0].name.first);
})
console.log('end');