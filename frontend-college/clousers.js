//clousers
//

function outerFun(){
    let outerVar = "I am outer var";
    function innerFun(){
        console.log(outerVar);
    }
    return innerFun
}
const res = outFun()
res()

function greet(name){
    return function(){
        
    }
}