var word = prompt("Digite uma palavra: ");
if (word === ''|| word >= 0 || word <= 0){
 alert("Atenção! Digite uma palavra: ");  
}else{
  var effect = "";
  for (i = 0; i < word.length; i++){
    var eachLetter;
    var code; //Esta variavel é responsavel por receber o resultado da função
    eachLetter = word[i].toUpperCase();
    code = cipher(eachLetter);
    effect = effect + code;
  }

  function cipher(eachLetter){
    var toAscii;
    var result;
    var encoded;
    if(eachLetter === word[i]){ //Essas são as letras maiúsculas
      toAscii = eachLetter.charCodeAt();  
      encoded = (toAscii - 65 + 7) % 26 + 65;
      result = String.fromCharCode(encoded);
      return result;
    }else{ // são as minuscula
      toAscii = word[i].charCodeAt();//Essas são as letras minúsculas
      encoded = (toAscii - 97 + 7) % 26 + 97;
      result = String.fromCharCode(encoded);
      return result;
    }
  }
  var response ="";
  response += effect;
  document.write("<p>Esta é sua palavra de maneira cifrada: " + response.bold() + "</p>");

  cipher(eachLetter);
  }
  