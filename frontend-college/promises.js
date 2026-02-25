// //promises concepts
// function test(){
//     setTimeout(()=>{
//         console.log("connected to the server");
//     },2000)
//     callback();
// }
// function getData(){
//      setTimeout(()=>{
//         console.log("you get the data");
//     },2000)
//     callback();
// }
// function download(){
//      setTimeout(()=>{
//         console.log("download the file");
//     },2000)
//     callback();
// }
// function save(){
//      setTimeout(()=>{
//         console.log("save the file");
//     },2000)
//     callback();
// }
// //callback hell
// connect(function(){
//     download(function(){
//         save(function(){
//             console.log("done");
//         })
//     })
//})
//prolem with callback is 
// readablity of code is increased debugging is complex
// identation of code is complex
//aso we introduce promises

//promise 
//three states
//pending, fulfilled, rejected
//fetch the data from the server or api
//reading the files
//waiting
//database calls

// let foodOrder = new Promise ((resolve, reject)=>{
//     let restauantOpen = true;
//     if(restaurantOpen){
//         resolve("food delivered");
//     }
//     else{
//         reject("restaurant is closed");
//     }
//     //handle the promise
//     //then will be executed if promises is resolved
//     foodOrder.then(result=>console.log(result))
//     //if error occur
//     .catch(error=>console.log(error));
// })
let foodOrder = new Promise((resolve, reject) => {
    let restaurantOpen = true;

    if (restaurantOpen) {
        resolve("food delivered");
    } else {
        reject("restaurant is closed");
    }
});

foodOrder
    .then(result => console.log(result))
    .catch(error => console.log(error));

let withdrawMoney = new Promise((resolve, reject)=>
{
    let bal = 7000;
    let withdrawAmount = 5000;
    //check
    if(bal>withdrawAmount){
        resolve("withdraw done")
    }
})