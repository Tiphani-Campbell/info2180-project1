/* Add your JavaScript to this file */
var email;
const emailErr = "Please enter a valid email";


window.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector('form');
    form.addEventListener("submit", (event) => {
        event.preventDefault();
   
        email=form.elements['email'];
        
        console.log(email);
        let message = document.querySelector('.message');
        let validEmail = validateEmail(email);
        if(validEmail===1){
            message.setAttribute("class", "message");
            message.innerHTML = emailErr;
        }else if(validEmail===2){
            message.setAttribute("class", "message");
            message.innerHTML = emailErr;
        }else{
           let emailaddress =email.value;
           message.setAttribute("class", "message");
           message.innerHTML = `Thank you! Your email address ${emailaddress} has been added to our mailing list!`;
        }
        
        console.log("Form submitted");      

    });// end form event

}); //end document loading

const validateEmail = function(email){
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const address = email.value.trim();
    if(address===""){
        return 1;
    }else if(!emailRegEx.test(address)){
        return 2;
    }else{
        return 3;
    }
}//end validateEmail