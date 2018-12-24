var config = {
      apiKey: "AIzaSyCQXoIYiF1zwb5UZZ8nxlzsZ9qWlc-PdbM",
      authDomain: "event-system-a17d8.firebaseapp.com",
      databaseURL: "https://event-system-a17d8.firebaseio.com",
      projectId: "event-system-a17d8",
      storageBucket: "event-system-a17d8.appspot.com",
      messagingSenderId: "955518121688"
};
firebase.initializeApp(config);
database = firebase.database(); 

var main_section = document.querySelector('.page-main');
 firebase.auth().onAuthStateChanged(function(user) {
     if(user){
             var uid = firebase.auth().currentUser.uid;
             var get_status = firebase.database().ref('accounts/' + uid + '/character/status/');
             get_status.on('value', (snapshot) =>{
                var status = snapshot.val();
                    if(status == 1){
                         console.log('Logged');
                         
                         fight_system();
                         interface();
                         iconbar();
                    }else{
                        create_profile();
                        console.log('You have to create a character!');
                    }
             });
             
       
         
     } else{
         login_form();
         login_system();
         register_system();
     }             
});