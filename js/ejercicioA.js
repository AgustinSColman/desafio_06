var cantidadDeGatitos = 6; 
var dibujos = ["😺", "😸", "😹"]; 
for (var i = 1; i <= cantidadDeGatitos; i++) { 
  var emoji = dibujos[(i - 1) % 3]; 
  console.log("A: Gato #" + i + ": " + emoji); 
}   
