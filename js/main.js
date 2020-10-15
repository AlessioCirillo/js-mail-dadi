//EMAIL
var account= [ 'alessio@boolean.com', 'cirillo@boolean.com' ];

var user= prompt('Inserisci la tua email').toLocaleLowerCase();
console.log(user);

var userFound = false;

for (var i = 0; i < account.length; i++) { 
    var item= account[i];

     if ( user == item){
         userFound = true;
     }
}

if (userFound == true) {
    document. getElementById ('email').innerHTML = 'Benvenuto ' + user;
    console.log('Email corretta');
} else{
    alert ('EMAIL ERRATA');
    console.log('Email errata');
}

