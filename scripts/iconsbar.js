const iconbar = () =>{
    var bar = document.createElement('div');
    
    main_section.appendChild(bar);
    
    bar.classList.add('bar');
    
    
    var map = document.createElement('div');
    
    map.classList.add('bar_item');
    map.classList.add('fas');
    map.classList.add('fa-atlas');
    map.setAttribute('btn-name', 'map');
    
    bar.appendChild(map);
    
    var bag = document.createElement('div');
    
    bag.classList.add('bar_item');
    bag.classList.add('fas');
    bag.classList.add('fa-shopping-bag');
    bag.setAttribute('btn-name', 'bag');
    
    bar.appendChild(bag);
    
    var skills = document.createElement('div');
    
    skills.classList.add('bar_item');
    skills.classList.add('fas');
    skills.classList.add('fa-book-dead');
    skills.setAttribute('btn-name', 'skills');
    
    bar.appendChild(skills);
    
    var stats = document.createElement('div');
    
    stats.classList.add('bar_item');
    stats.classList.add('fas');
    stats.classList.add('fa-chart-bar');
    stats.setAttribute('btn-name', 'stats');
    
    bar.appendChild(stats);
    
    var quest = document.createElement('div');
    
    quest.classList.add('bar_item');
    quest.classList.add('far');
    quest.classList.add('fa-question-circle');
    quest.setAttribute('btn-name', 'quest');
    
    bar.appendChild(quest);
    
    //functions
    
    var btn_list = document.querySelectorAll('.bar_item');
    
    var nodes = Array.prototype.slice.call(btn_list);
    
    nodes.forEach((item) =>{
        item.addEventListener('click', () => {
            var findModal = document.querySelector('.battle_section');
            if(findModal){
                main_section.removeChild(findModal);
            }else{
                var modal = document.createElement('div');
                
                var uid = firebase.auth().currentUser.uid;
            
                main_section.appendChild(modal);

                modal.classList.add('battle_section');
                
                var getAttribute = item.getAttribute('btn-name');
                
                switch(getAttribute){
                    case 'map':
                        modal.innerHTML = 'Hello its me';
                    break;
                    case 'bag':
                        modal.innerHTML = 'zxc';
                    break;
                    case 'skills':
                        modal.innerHTML = 'qwer';
                    break;
                    case 'stats':
                        
                        
                        var uid = firebase.auth().currentUser.uid,
                            getStats = firebase.database().ref('accounts/' + uid + '/character/battles/quests/');

                        getStats.on('value', function(snapshot){
                            var datas = snapshot.val(),
                                keys = Object.keys(datas);
                            
                            for(var i = 0; i<=keys.length-1; i++){
                                var k = keys[i];
                                
                                modal.innerHTML = modal.innerHTML + keys[i] + ' ' + datas[k].wins + '  ';
                            }
                            

                        });
                        
                        
                    break;
                    case 'quest':
                        modal.innerHTML = 'asdfa';
                    break;
                    default:
                        alert('smth went wrogn');
                }
            }
            
            
        }, false);
    });
};