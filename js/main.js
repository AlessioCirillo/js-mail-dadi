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



//GIOCO NUMERI

//nuemro utente
var utente = Math.floor(Math.random() * 6) +1; 
document. getElementById ('numero-utente').innerHTML = 'numero utente: ' + utente;
console.log( 'utente', utente);

//numero pc
var computer = Math.floor(Math.random() * 6) +1; 
document. getElementById ('numero-computer').innerHTML = 'numero computer: ' + computer;
console.log( 'computer', computer);



if (utente > computer){
    document. getElementById ('risultato').innerHTML = 'utente vince';
    console.log('utente vince');

} else if (computer > utente){
    document. getElementById ('risultato').innerHTML = 'computer vince';
    console.log('computer vince');

} else{
    document. getElementById ('risultato').innerHTML = 'non vince nessuno';
    console.log('pari e patta');
}