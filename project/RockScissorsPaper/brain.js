let choices=document.querySelectorAll('.choice');
let msg= document.querySelector("#msg");
let userscore1=document.querySelector("#user-score");
let compscore1 = document.querySelector("#comp-score");
let compscore=0;
let userscore=0;
const gencompChoice= ()=>{
    const options=["rock","paper","scissors"];
    let randomindx=Math.floor(Math.random()*3);
    return options[randomindx];
}
const draw= ()=>{
    console.log(`Match is draw`);
    msg.innerText=`Match is Draw`;
    msg.style.backgroundColor="Blue"
}
const showWinner= (userWin)=>{
    console.log(userWin);
    if(userWin){
        userscore++;
        userscore1.innerText=userscore;
        console.log(`Congratulation You Win`);
        msg.innerText="Congratulation You win";
        msg.style.backgroundColor="green";
        
    }
    else{
        compscore++;
        compscore1.innerText=compscore;
        msg.innerText="Play Next time";
        msg.style.backgroundColor="red";
    }
}

const playGame= (userchoice)=>{
    console.log(userchoice);
    let compChoice=gencompChoice();
    console.log(compChoice);

    if(userchoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userchoice==="scissors"){
            userWin = compChoice==="rock" ? false : true;
        }
        else if(userchoice==="paper"){
            userWin = compChoice==="scissors" ? false : true;
        }
        else{
            userWin = compChoice==="paper" ? false : true;
        }
        showWinner(userWin);
    }
    

}
choices.forEach((choice)=>{
    choice.addEventListener('click',(e)=>{
        console.log(`choices is clicked`);
        let userchoice=choice.getAttribute('id');
        playGame(userchoice);
    })
})