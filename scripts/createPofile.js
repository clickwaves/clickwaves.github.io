const create_profile = () =>{
      var createNewChar = document.createElement('button'),
          getName = document.createElement('input');
      createNewChar.innerHTML = 'Click me';
      main_section.appendChild(getName);
      main_section.appendChild(createNewChar);
    createNewChar.addEventListener('click', function(){
         var uid = firebase.auth().currentUser.uid,
             user = firebase.auth().currentUser;
             
        firebase.database().ref().child('accounts/' + uid + '/character').set({
                battles: {
                    monsters_stat: {
                        Ekshidion: {
                            wins: 0,
                            loses: 0
                        },
                        Freder: {
                            wins: 0,
                            loses: 0
                        },
                        Gragheh: {
                            wins: 0,
                            loses: 0
                        },
                        Karelnel: {
                            wins: 0,
                            loses: 0
                        }
                    }
                },
                char: {
                    equipment: {
                        item_0: 0,
                        item_1: 0
                    },
                    exp: 0,
                    gold: 0,
                    nick: getName.value,
                    stamin: 100
                },
                status: 1,
                map_status: 1
             });
                        
    }, false);
};