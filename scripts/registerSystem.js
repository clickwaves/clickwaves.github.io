const register_system = () => {
     var registerBtn = document.querySelector('.register_btn');
                   
     registerBtn.addEventListener('click', function(){
         
         var email_user = document.querySelector('#email').value,
             password_user = document.querySelector('#password').value;
         firebase.auth().createUserWithEmailAndPassword(email_user, password_user).catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
             console.log(errorMessage);
         }); 
                       
     }, false);
     
    
    
};