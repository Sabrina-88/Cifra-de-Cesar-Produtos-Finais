var frase = prompt("Digite uma palavra: ");
if (frase === ''|| frase >= 0 ){//nao pode deixar vazio nem numeros
   alert("Atenção! Digite uma palavra: ");	
  }else{
var resultado = "";
for (i = 0; i < frase.length; i++){
  var cadaLetra;
  var cifra; // criei esta variavel para poder puxar as funcoes que estao de fora
  cadaLetra = frase[i].toUpperCase();
   cifra = cipher(cadaLetra);
  
   resultado = resultado + cifra;
  document.write(resultado); // nao dá pra usar alert
}

function cipher(cadaLetra){
  var toAscii;
  var result;
  if(cadaLetra === frase[i]){ // são as maisuculas
  toAscii = cadaLetra.charCodeAt();
  var encoded;
  encoded = (toAscii - 65 + 7)%26 + 65;
  result = String.fromCharCode(encoded);console.log("MAIUS "+ result);
  return result;
}else{ // são as minuscula
  toAscii = frase[i].charCodeAt();
  var encoded;
  encoded = (toAscii - 97 + 7)%26 + 97;
  result = String.fromCharCode(encoded);console.log("min "+ result);
  return result;
  
}
}
cipher(cadaLetra);
  }
 