const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e); 
        console.log(e.target);
        if (e.target.id==="Red") {
            body.style.backgroundColor=e.target.id;
            
        }
        if (e.target.id==="Green") {
            body.style.backgroundColor=e.target.id;
            
        }
        if (e.target.id==="Blue") {
            body.style.backgroundColor=e.target.id;
            
        }
        if (e.target.id==="Purple") {
            body.style.backgroundColor=e.target.id;
            
        }
    })
})
