const interface = () =>{
    var page_main = document.querySelector('.page-main'),
        ui = document.createElement('div'),
        nickname = document.createElement('p'),
        char_power = document.createElement('span'),
        equipment = document.createElement('div'),
        stats_container = document.createElement('div'),
        win_stat = document.createElement('span'),
        lose_stat = document.createElement('span'),
        skills = document.createElement('div'),
        skill = document.createElement('span');
    
    
    page_main.appendChild(ui);
    
    ui.appendChild(nickname);
    ui.appendChild(stats_container);
    stats_container.appendChild(win_stat);
    stats_container.appendChild(lose_stat);
    ui.appendChild(char_power);
    ui.appendChild(equipment);
    ui.appendChild(skills);
    skills.appendChild(skill);
    
    ui.classList.add('ui');
    nickname.classList.add('nickname');
    
    
    var uid = firebase.auth().currentUser.uid,
        connect_data = firebase.database().ref('accounts/' + uid + '/character/');
    
    connect_data.on('value', function(snapshot){
        nickname.innerHTML = snapshot.val().name; 
        win_stat.innerHTML = 'Wygrane: ' + snapshot.val().battles.win + '<br>'; 
        lose_stat.innerHTML = 'Przegrane: ' + snapshot.val().battles.lose;
        
            
    });
    
    logOut_system();
};