let boxes=document.querySelectorAll('.box');
let rest=document.querySelector('.reset-btn');
let cnt0=true;
let newGameButoon=querySelector('#new-btn');
let msg=querySelector('#msg');
let msgcontainer=querySelector('.msg-container');

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
console.log("hello");
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box was clicked");
        if (cnt0) {
            box.innerText="O";
            cnt0=false;
        }
        else{
            box.innerText="X";
            cnt0=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
let showWinner=(a)=>{
    msg.innerText=`congration winner is${a}`
}
checkWinner=()=>{
    for(pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        const pos0Val=boxes[pattern[0]].innerText;
        const pos1Val=boxes[pattern[1]].innerText;
        const pos2Val=boxes[pattern[2]].innerText;
        if(pos0Val!="" && pos1Val!="" && pos2Val!=""){
            if(pos0Val==pos1Val && pos1Val==pos2Val){
                console.log("congration ",boxes[pattern[0]].innerText);
                showWinner(pos0Val);
            }
        }
    }
}