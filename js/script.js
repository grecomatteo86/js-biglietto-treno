//1.chiedo all'utente il numero di km che intende percorrere
var km = prompt('quanti km vuoi percorrere?');

//2. chiedo all'utente la sua età
var eta = prompt('quanti anni hai?');

//3. calcolo prezzo biglietto in base ai km (0.21 € al km)
var prezzo = km * 0.21;

//4. sconto del 20% per i minorenni
if (eta < 18) {
  var sconto20 = ((prezzo * 20) / 100 );
  console.log('lo sconto ai minorenni è di ' + sconto20 + '€');
  var prezzoMinorenne = prezzo - sconto20;
  alert('bella zio, per il tuo biglietto ti devi fare dare da mamma e papà ' + prezzoMinorenne + ' €');
}
