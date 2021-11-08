// <!-- Toggle Dropdown Menu - IN -->   
// Ejecuto el script post cargar toda la página:
window.onload = function() {
    let threeLinesHam=document.getElementById('threeLinesHam');
    let cross=document.getElementById('cross');
    let hamburger=document.getElementById('hamburger');
    // console.log(hamMenu);    

    //Click listener:
    threeLinesHam.addEventListener('click',(event)=>{
        if (threeLinesHam.classList.contains('open')){
            threeLinesHam.classList.remove('open');
        } else {
            threeLinesHam.classList.add('open');
        };        
    });  
    cross.addEventListener('click',(event)=>{
        if (threeLinesHam.classList.contains('open')){
            threeLinesHam.classList.remove('open');
        } else {
            threeLinesHam.classList.add('open');
        };        
    }); 

    //Click listener:
    document.addEventListener('click',(event)=>{
        console.log(hamburger.contains(event.target));
        if (!hamburger.contains(event.target)) {              
            if(threeLinesHam.classList.contains('open')){ 
                threeLinesHam.classList.remove('open');  
            };               
        };     
    });
    
}
// <!-- Toggle Dropdown Menu - OUT -->