var kmUtente = parseInt(prompt('Caro utente, quanti km vuoi percorrere?'));
while (isNaN(kmUtente)){
  var kmUtente = parseInt(prompt('Quanti km vuoi percorrere? DEVI inserire un NUMERO'));
}
console.log('L\'utente vuole percorrere ' + kmUtente + ' km');
var etaUtente = parseInt(prompt('Quanti anni hai?'));
while(isNaN(etaUtente)){
  var etaUtente = parseInt(prompt('Caro utente, quanti anni hai? DEVI inserire un NUMERO'));
}
console.log('L\'utente ha dichiarato di avere ' + etaUtente + ' anni');
var prezzoBase = (kmUtente * 0.21).toFixed(2);
if (etaUtente < 18) {
  var sconto20 = ((prezzoBase * 20) / 100 );
  console.log('lo sconto ai minorenni è di ' + sconto20 + ' €');
  var prezzoMinorenne = (prezzoBase - sconto20).toFixed(2);
  alert ('bella zio, per il tuo biglietto ti devi fare dare da mamma e papà ' + prezzoMinorenne + ' €');
}
else if (etaUtente > 65) {
  var sconto40 = ((prezzoBase * 40) / 100 );
  console.log('lo sconto agli over 65 è di ' + sconto40 + ' €');
  var prezzoOver65 = (prezzoBase - sconto40).toFixed(2);
  alert ('salve, il suo biglietto costa ' + prezzoOver65 + ' €, grazie per averci scelto e buon viaggio');
}
else {
  console.log('l\'utente paga il biglietto intero');
  alert ('il prezzo del suo biglietto è ' + prezzoBase + ' €, la compagnia le augura un buon viaggio');
}
