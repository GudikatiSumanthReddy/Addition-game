
let FirstNumber = document.getElementById("First-number");
let SecondNumber = document.getElementById("Second-number");
let userInput = document.getElementById("userInput");
let Result = document.getElementById("gameResult");
let sucess = "Congratulation you got it right!";
let failmessage = "please try again!";


function Resetgame(){
    FirstNumber.textContent = Math.ceil(Math.random()*1000);
    SecondNumber.textContent = Math.ceil(Math.random()*1000);
    sucess.textContent = "";
    failmessage.textContent = "";
}

function checkresult(){
    let number1 = parseInt(FirstNumber.textContent);
    let number2 = parseInt(SecondNumber.textContent);
    let user = parseInt(userInput.value);

    let add = number1+number2;

    if(add===user){
        Result.textContent = sucess;
        Result.style.backgroundColor = "#028a0f";
    }else{
        Result.textContent = failmessage;
        Result.style.backgroundColor = "#1e217c";
    }
}