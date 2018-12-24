  const fight_system = () =>{
    var uid = firebase.auth().currentUser.uid,
        user = firebase.auth().currentUser;
    var chooseOpponent = document.createElement('button');
    
    chooseOpponent.classList.add('hel');
    chooseOpponent.innerHTML = 'Wybierz przeciwnika';
    main_section.appendChild(chooseOpponent);
                                       
     var enemyHp = 100;
     var playerHp = 100;

       var player = {
           name: 'Player',
           hp: 0,
           damage: 11,
           healing: 12
       }
       var enemy = {
           name: 'enemy',
           hp: 0,
           damage: 10
       }                
                        
       var z = 0;
       chooseOpponent.addEventListener('click', function(){
         //creating buttons
           document.querySelector('.hel').classList.toggle('prefix');
            if(document.querySelector('.Monster')){
              var a = document.querySelectorAll('.Monster'); 
                
                var l = Array.prototype.slice.call(a);
                
                l.forEach(function(item){
                  main_section.removeChild(item);        
                });
            }else{
                for(var i = 0; i<=3;  i++){
                      var attackBtn = document.createElement('button');

                      main_section.appendChild(attackBtn);


                      attackBtn.classList.add('Monster');
                      attackBtn.classList.add('attBtn' + i);

       //               attackBtn.innerHTML = 'Attack' + i;
                      attackBtn.classList.add('zz');
                    
                    
                        if(i == 0){
                            attackBtn.innerHTML = 'Freder';
                            attackBtn.setAttribute('num-btn', 'Freder');
                        }else if(i == 1){
                            attackBtn.innerHTML = 'Gragheh';
                            attackBtn.setAttribute('num-btn', 'Gragheh');
                        }else if(i == 2){
                            attackBtn.innerHTML = 'Karelnel';
                            attackBtn.setAttribute('num-btn', 'Karelnel');
                        }else if(i == 3){
                            attackBtn.innerHTML = 'Ekshidion';
                            attackBtn.setAttribute('num-btn', 'Ekshidion');
                        }
                  }
                    
                            

                  var btns = document.querySelectorAll('.zz');
                  var nodes = Array.prototype.slice.call(btns);

                  nodes.forEach(function(item){
                     item.addEventListener('click', function(){
                         var e = this.getAttribute('num-btn');
                         
                         var battle_section = document.createElement('div'),
                             btn_section = document.createElement('div'),
                             btn_section = document.createElement('div'),
                             left_section = document.createElement('div'),
                             right_section = document.createElement('div'),
                             battle_title = document.createElement('h1'),
                             btwn = document.createElement('p'),
                             nextWave = document.createElement('button'),
                             closeBattle = document.createElement('button'),
                             btl_section = document.createElement('p');
                             
                         
                         
                         
                         main_section.appendChild(battle_section);
                         battle_section.classList.add('battle_section');
                         
                         battle_section.appendChild(left_section);
                         battle_section.appendChild(right_section);
                         
                         left_section.classList.add('left_section');
                         right_section.classList.add('right_section');

                         left_section.appendChild(battle_title);
                         left_section.appendChild(nextWave);
                         left_section.appendChild(closeBattle);
                         
                         right_section.appendChild(btl_section);
                         
                         nextWave.innerHTML = 'Kolejna fala';
                         closeBattle.innerHTML = 'Zakończ walkę';
                         
                         battle_title.innerHTML = 'Walka pomiędzy <br> Nickname a ' + e; 
                         
                         
                         
                         nextWave.addEventListener('click', function(){
                             
                             btl_section.innerHTML = '';
                             player.hp = playerHp;
                             enemy.hp = enemyHp;
                             var x = 0;
                             var y = 0;
                              var starCountRef = firebase.database().ref('accounts/' + uid + '/character/battles/quests/' + e);

                             starCountRef.on('value', function test(snapshot) {

                             x = (snapshot.val().wins)+1;

                             while(player.hp > 0 && enemy.hp > 0){
                              var MathPlayer = Math.random();
                              var MathEnemy = Math.random();

                                 enemy.hp -= player.damage * MathPlayer;
                                 player.hp -= enemy.damage * MathEnemy;

                                 btl_section.innerHTML = btl_section.innerHTML + 'Enemy: ' + enemy.hp + '<br> Player: ' + player.hp + '<br>';

                                 if(player.hp < 0){
                                     console.log('You lost');
                                 }else if(enemy.hp < 0) {
                                     console.log('You won');

                                     firebase.database().ref().child('accounts/' + uid + '/character/battles/quests/' + e).update({ wins: x });
                                 }
                             }



                             });
                         }, false);
                            
                         closeBattle.addEventListener('click', function(){
                                main_section.removeChild(battle_section);
                         }, false);
                     }, false);
                  });
            }
      
                    

                    
     }, false);
                
};