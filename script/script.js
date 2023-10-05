//declarar de las variables
let nameBox;
let button;
let optionSelected;
let caja2;
let player1;
let imagePulse;
//inicialización de las variables

function initVariables(){
    nameBox = document.getElementById("nombre");
    button = document.getElementById("button");
    nameBox.focus();
	//player1.document.getElementsByName("jugador1")
	// Obtén una NodeList de todas las imágenes con la clase "imagen"
	imagePulse = document.querySelectorAll(".img-pulsada");
}

//funcion valor imagen pulsada

function imgPulsada(){
	// Itera sobre cada imagen y agrega un evento de clic a cada una
	imagePulse.forEach(function(imagen) {
		imagen.addEventListener("click", function() {
		  // Obtiene el valor del atributo data-valor de la imagen actual
		  var valor = imagen.getAttribute("data-valor");
	
		  // Realiza la acción que desees con el valor obtenido, por ejemplo, mostrarlo en la consola
		  console.log("Valor de la imagen: " + valor);
		});
	  });
}

//uso de las variables

window.addEventListener("load",()=>{


    initVariables();
	imgPulsada();
    nameBox.addEventListener("input",()=>{
		if(nameBox.value.length >= 1 && nameBox.value.length <= 25 ){
			button.disabled = false; 
		}else{
			button.disabled = true; 
		}
	});

});