let string="";
let button=document.querySelectorAll('.buttons');
button.forEach(function(buttons){
    buttons.addEventListener('click',function(e){
        console.log(e.target);
        string=string + e.target.innerHTML;
        document.querySelector('input').value=string
    })
})