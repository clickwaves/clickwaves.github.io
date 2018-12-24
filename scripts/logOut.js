const logOut_system = () =>{
    var btn = document.createElement('button');
        btn.classList.add('logOut');
        btn.innerHTML = 'Wyloguj się!';
    
    var logout_btn = document.querySelector('.logOut'),
        ui = document.querySelector('.ui');
    
        ui.appendChild(btn);
        btn.addEventListener('click', function(){
            firebase.auth().signOut();
            
            location.reload();
        }, false);
    
};