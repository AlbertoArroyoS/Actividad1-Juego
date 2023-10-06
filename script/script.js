//declarar de las variables
let nameBox;
let button;
let optionSelected;
let caja2;
let player1;
let imagePulse;
//inicialización de las variables
// console.log("Valor de la imagen: " + valor);
let botonJugada;

let botonpiedra;
let botonpapel;
let botontijera;
let botonlagarto;
let botonspock;
let resultadoBoton;

let matrizResultados;
let fraseResultados;
let resultadoMaquina;
let resultadoP1VsP2;

//contadores
let contadorPartidas;
let contadorGanadas;
let contadorPerdidas;
let contadorEmpates;

function initVariables(){
    nameBox = document.getElementById("nombre");
    button = document.getElementById("button");
    nameBox.focus();
	//player1.document.getElementsByName("jugador1")
	// Obtén una NodeList de todas las imágenes con la clase "imagen"
	//imagePulse = document.querySelectorAll(".img-pulsada");
	//botonJugada = document.getElementById("btnpiedra").value;
	//console.log();
	matrizResultados=[
					[0,1,2,2,1],
					[2,0,1,1,2],
					[1,2,0,2,1],
					[1,2,1,0,2],
					[2,1,2,1,0]
					];
	fraseResultados = [
					["Empate","Papel tapa piedra","Piedra rompe tijeras","Piedra aplasta lagarto","Spock vaporiza piedra"],
					["Papel tapa piedra","Empate","tijeras cortan papel","lagarto devora papel","Papel desautoriza a Spock"],
					["Piedra rompe tijeras","Tijeras cortan papel","Empate","Tijeras decapitan lagarto","Spock rompe tijeras"],
					["Piedra aplasta lagarto","Lagarto devora papel","Tijeras decapitan lagarto","Empate","Lagarto envenena a Spock"],
					["Spock vaporiza piedra","Papel desautoriza a Spock","Spock rompe tijeras","Lagarto envenena a Spock","Empate"]
					];

	

	botonpiedra= document.getElementById("btnpiedra");
	botonpapel= document.getElementById("btnpapel");
	botontijera= document.getElementById("btntijera");
	botonlagarto= document.getElementById("btnlagarto");
	botonspock= document.getElementById("btnspock");

	contadorPartidas=0;
	contadorGanadas=0;
	contadorEmpates=0;
	contadorPerdidas=0;
}

//funcion valor imagen pulsada

function empezarPartida(){
	
	botonpiedra.addEventListener("click",eligio_piedra);
	botonpapel.addEventListener("click",eligio_papel);
	botontijera.addEventListener("click",eligio_tijeras);
	botonlagarto.addEventListener("click",eligio_lagarto);
	botonspock.addEventListener("click",eligio_spock);
	
}


function eligio_piedra(){
	resultadoBoton=0;
	resultadoPartida(resultadoBoton);
}

function eligio_papel(){
	resultadoBoton=1;
	resultadoPartida(resultadoBoton);
}

function eligio_tijeras(){
	resultadoBoton=2;
	resultadoPartida(resultadoBoton);
}

function eligio_lagarto(){
	resultadoBoton=3;
	resultadoPartida(resultadoBoton);
}
function eligio_spock(){
	resultadoBoton=4;
	resultadoPartida(resultadoBoton);
}

function resultadoPartida(numeroOpcion) {
	
	//añadir la imagen que corresponde a numeroOpcion del parametro
	addImg(numeroOpcion);
	
	
	//console.log(numeroOpcion);
	contadorPartidas++;
	resultadoMaquina= Math.floor(Math.random()*5);
	console.log(resultadoMaquina);
	//Paso a la matriz el numero que juega aleatorio el ordenador, y el valor del boton pulsado
	resultadoP1VsP2 = matrizResultados[resultadoMaquina][numeroOpcion];

	console.log('Quien gana: '+ resultadoP1VsP2);
	//muesto la frase resultante:
	let fraseFinal = fraseResultados[resultadoMaquina][numeroOpcion];
	console.log(fraseFinal);


	//Sumo los contadores de partidas jugadas, ganadas y perdidas
	switch(resultadoP1VsP2){
		case 0: //Si hay empate
			contadorEmpates++;
			break; 
		case 1: //Si gana el jugador
			contadorGanadas++; 
			break; 
		case 2: //Si gana la maquina
			contadorPerdidas++; 
			break; 
	}
	// Comprobacion por consola de los contadores
	console.log('Partidas jugadas: ' + contadorPartidas);
	console.log('Partidas ganadas: ' + contadorGanadas);
	console.log('Partidas empatadas: '+ contadorEmpates);
	console.log('Partidas perdidas: ' + contadorPerdidas);
	
}

//añadir imagen grande a boton seleccionado
function addImg (valor){
	let miJugada;
	let imagen = document.createElement("img");

	switch (valor){
		case 0:
			imagen.src = "/icon/rock.png";
			miJugada = document.getElementById("mi-jugada");
			miJugada.appendChild(imagen);
			break;

		case 1:
			imagen.src = "/icon/paper.png";
			miJugada = document.getElementById("mi-jugada");
			miJugada.appendChild(imagen);
			break;

		case 2:
			imagen.src = "/icon/scissors.png";
			miJugada = document.getElementById("mi-jugada");
			miJugada.appendChild(imagen);
			break;
		case 3:
			imagen.src = "/icon/lizard.png";
			miJugada = document.getElementById("mi-jugada");
			miJugada.appendChild(imagen);
			break;
		case 4:
			imagen.src = "/icon/spock.png";
			miJugada = document.getElementById("mi-jugada");
			miJugada.appendChild(imagen);
			break;
	}

}

//uso de las variables

window.addEventListener("load",()=>{


    initVariables();
	empezarPartida();
    nameBox.addEventListener("input",()=>{
		if(nameBox.value.length >= 1 && nameBox.value.length <= 25 ){
			button.disabled = false; 
		}else{
			button.disabled = true; 
		}
	});

});