var cantidadDeGatitos = 8; 
var cantidadDePasos = 6;
var emojiGato = "🐈"; 
var emojiDePaso = "🐾"; 
for (var i = 1; i <= cantidadDeGatitos; i++) {
  var pasos = ""; 
  for (var j = 1; j <= cantidadDePasos; j++) { 
    pasos += emojiDePaso; 
  }
  console.log("Gato #" + i + ": " + emojiGato + " " + pasos); 
}
