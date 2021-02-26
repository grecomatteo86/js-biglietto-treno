//1.chiedo all'utente il numero di km che intende percorrere
var km = parseInt(prompt('quanti km vuoi percorrere?'));
console.log(km + ' km');

//2. chiedo all'utente la sua età
var eta = parseInt(prompt('quanti anni hai?'));
console.log(eta + ' anni');

//3. calcolo prezzo biglietto in base ai km (0.21 € al km)
var prezzo = km * 0.21;

//4. sconto del 20% per i minorenni
if (eta < 18) {
  var sconto20 = ((prezzo * 20) / 100 );
  console.log('lo sconto ai minorenni è di ' + sconto20 + ' €');
  var prezzoMinorenne = prezzo - sconto20;
  alert ('bella zio, per il tuo biglietto ti devi fare dare da mamma e papà ' + prezzoMinorenne + ' €');
}

//5. sconto del 40% per over 65
else if (eta > 65) {
  var sconto40 = ((prezzo * 40) / 100 );
  console.log('lo sconto agli over 65 è di ' + sconto40 + ' €');
  var prezzoOver65 = prezzo - sconto40;
  alert ('salve, il suo biglietto costa ' + prezzoOver65 + ' €, grazie per averci scelto e buon viaggio');
}

//6. prezzo intero
else {
  console.log('l\'utente\' paga il biglietto intero');
  alert ('il prezzo del suo biglietto è ' + prezzo + ' €, la compagnia le augura un buon viaggio');
}
