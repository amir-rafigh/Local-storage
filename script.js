const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
let array;

form.addEventListener('submit' , ()=>{
    if(!localStorage.getItem('information')){
        array = [] 
    }
    else{
        array = split()
    }

    let name_1 = inputs[0].value;
    let email = inputs[1].value;
    let phone_num = inputs[2].value;
    let total = `${name_1} ${email} ${phone_num}`
    array.push(total);
    localStorage.setItem('information' , array)

    

    function split(){
        let splitt = localStorage.getItem('information').split(',');
        return splitt
    }
    

   
    
     
       
    
  
    

    
    
})

