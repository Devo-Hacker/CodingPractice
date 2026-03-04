//access or selecct the element
const startBtn= document.getElementById("startBtn")
const quizDiv = document.getElementById("quiz")
const scoreSpan =document.getElementById("score")
//initially set score is 0
//or score is variable to store score
let score =0
//create a promise
const loadQuention=()=>{
    return new Promise((resolve)=>{
    //timedely to
    setTimeout(()=>{
        //send question after 2 sce
        resolve({
            question:"What is DONE",
            options: ["object", "js dom","Document Obj Model","None"],
            answer: "Document Obj Model"
    })
    },2000)
    })
}
//create a event on start btn
startBtn.addEventListener("click",()=>{
    //when you click on start btn change the text to loading
    startBtn.textContent="Loading..."
    //csll the promise
    loadQuention().then(data=>{
        //hide the button
        startBtn.style.display="none"
        //show the question
        quizDiv.innerHTML=`
        <h3>${data.question}</h3>
        ${data.options.map(option=>`<button class="option">${option}</button>`)}
        `
        //select all the option
        const button = document.querySelectorAll(".option")
        //loop
        button.forEach(btn=>{
            btn.addEventListener("click",()=>{
                //check if it is the correct ans
                if(btn.textContent===data.answer){
                    score++
                scoreSpan.textContent=score
                alert("Correct")
                }else{
                    alert("wrong")
                }
                quizDiv.innerHTML="<h3>quiz finish<h/3>"
            })
        })
    })
})