//declarar de las variables
let nameBox;
let button;
let optionSelected;
let caja2;
let player1;
let imagePulse;
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
let resultadoEscrito;

//contadores
let contadorPartidas;
let contadorGanadas;
let contadorPerdidas;
let contadorEmpates;
//marcadores
let puntuacion;
let resumenJugadas;
let resumenGanadas;
let resumenEmpatadas;
let resumenPerdidas;


//inicialización de las variables
function initVariables(){
    nameBox = document.getElementById("nombre");
    button = document.getElementById("button");
    nameBox.focus();
	//console.log();
	/* Matriz con opciones por posicion
			
	      			  /0 piedra/1 papel/2 tijera/3 lagarto/4 spock
			/0/piedra/
			/1 papel/
			/2 tijera/
			/3 lagarto/
			/4 spock/

		Resultado= 0 empate, 1 gana p1, 2 gana ordenador
	*/
	matrizResultados=[
					[0,1,2,2,1],
					[2,0,1,1,2],
					[1,2,0,2,1],
					[1,2,1,0,2],
					[2,1,2,1,0]
					];
	// Por cada posicion de la matriz anterior tiene una frase 
	fraseResultados = [
					["Empate","Papel tapa piedra","Piedra rompe tijeras","Piedra aplasta lagarto","Spock vaporiza piedra"],
					["Papel tapa piedra","Empate","tijeras cortan papel","lagarto devora papel","Papel desautoriza a Spock"],
					["Piedra rompe tijeras","Tijeras cortan papel","Empate","Tijeras decapitan lagarto","Spock rompe tijeras"],
					["Piedra aplasta lagarto","Lagarto devora papel","Tijeras decapitan lagarto","Empate","Lagarto envenena a Spock"],
					["Spock vaporiza piedra","Papel desautoriza a Spock","Spock rompe tijeras","Lagarto envenena a Spock","Empate"]
					];

	
	//Variables	a las que van a apuntar los listeners			
	botonpiedra= document.getElementById("btnpiedra");
	botonpapel= document.getElementById("btnpapel");
	botontijera= document.getElementById("btntijera");
	botonlagarto= document.getElementById("btnlagarto");
	botonspock= document.getElementById("btnspock");

	//variables contador				
	contadorPartidas=0;
	contadorGanadas=0;
	contadorEmpates=0;
	contadorPerdidas=0;

	//Resultado texto
	document.getElementById('resultado').textContent='Empieza a jugar';
	document.getElementById('resultado').style='font-size:30px'
	document.getElementById('resultado-frase').textContent='INDRODUZCA SU NOMBRE';
	document.getElementById('resultado-frase').style='font-size:30px'

	//Quito el borde rojo que he usado en css para guiarme
	document.getElementById('tabla-completa').id="sin-borde";

}

//funcion valor imagen pulsada

function empezarPartida(){
	
	//listeners
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
	addImgP1(numeroOpcion);
	
	//console.log(numeroOpcion);
	contadorPartidas++;
	resultadoMaquina= Math.floor(Math.random()*5);
	//añadir la imagen que corresponde al numero aleatorio del parametro
	addImgP2(resultadoMaquina);
	
	opcionMaquina=pasarNumeroAOpcion(resultadoMaquina);
	console.log('Opcion maquina '+ resultadoMaquina + ': ' + opcionMaquina);

	//Paso a la matriz el numero que juega aleatorio el ordenador, y el valor del boton pulsado
	resultadoP1VsP2 = matrizResultados[resultadoMaquina][numeroOpcion];

	
	//muesto la frase resultante:
	let fraseFinal = fraseResultados[resultadoMaquina][numeroOpcion];
	console.log(fraseFinal);

	ganador(resultadoP1VsP2);
	document.getElementById('resultado').textContent=resultadoEscrito;
	document.getElementById('resultado-frase').textContent=fraseFinal;

	//Pruebas consola
	console.log('Quien gana: '+ resultadoP1VsP2);
	console.log(resultadoEscrito);

	// Comprobacion por consola de los contadores
	console.log('Partidas jugadas: ' + contadorPartidas);
	console.log('Partidas ganadas: ' + contadorGanadas);
	console.log('Partidas empatadas: '+ contadorEmpates);
	console.log('Partidas perdidas: ' + contadorPerdidas);

	resumenResultados();
	
	
}

//Sumo los contadores de partidas jugadas, ganadas y perdidas
function ganador(numero){

	switch(resultadoP1VsP2){
		case 0: //Si hay empate
			contadorEmpates++;
			resultadoEscrito= '';
			document.getElementById('resultado-frase').style='font-size:30px'
			break; 
		case 1: //Si gana el jugador
			contadorGanadas++; 
			resultadoEscrito= 'Has ganado: ';
			break; 
		case 2: //Si gana la maquina
			contadorPerdidas++;
			resultadoEscrito= 'Has perdido: ';
			break;		 
	}
	return resultadoEscrito;

}

//Para mostrar en consola la opcion con palabras a la que corresponde el numero
function pasarNumeroAOpcion(numero){
	let opcion;

	switch(numero){
		case 0: 
			opcion='Piedra';
			break; 
		case 1: 
			opcion='Papel'; 
			break; 
		case 2: 
			opcion='Tijera';
			break; 
		case 3: 
			opcion='Lagarto';
			break; 
		case 4: 
			opcion='Spock';
			break; 
	}
	return opcion;
}

//añadir imagen grande a boton seleccionado jugador
function addImgP1 (valor){
	let miJugada;
	let imagen = document.createElement("img");

	switch (valor){
		case 0:
			document.getElementById("p1").src="/icon/rock.png";
			break;
		case 1:
			document.getElementById("p1").src="/icon/paper.png";
			break;
		case 2:
			document.getElementById("p1").src="/icon/scissors.png";
			break;
		case 3:
			document.getElementById("p1").src="/icon/lizard.png";
			break;
		case 4:
			document.getElementById("p1").src="/icon/spock.png";
			break;
	}
}
//añadir imagen grande a boton seleccionado ordenador aleatorio, añado que se ponga el fondo de pantalla a la img pequeña
function addImgP2 (valor){
	let miJugada;
	let imagen = document.createElement("img");
	resetFondoPc();

	switch (valor){
		case 0:
			document.getElementById("p2").src="/icon/rock.png";
			document.getElementById("pcpiedra").style.backgroundColor = "rgb(41, 42, 42, 5)";
			document.getElementById("pcpiedra").style.borderRadius = "10%";
			break;
		case 1:
			document.getElementById("p2").src="/icon/paper.png";
			document.getElementById("pcpapel").style.backgroundColor = "rgb(41, 42, 42, 5)";
			document.getElementById("pcpapel").style.borderRadius = "10%";
			break;
		case 2:
			document.getElementById("p2").src="/icon/scissors.png";
			document.getElementById("pctijeras").style.backgroundColor = "rgb(41, 42, 42, 5)";
			document.getElementById("pctijeras").style.borderRadius = "10%";
			break;
		case 3:
			document.getElementById("p2").src="/icon/lizard.png";
			document.getElementById("pclagarto").style.backgroundColor = "rgb(41, 42, 42, 5)";
			document.getElementById("pclagarto").style.borderRadius = "10%";
			break;
		case 4:
			document.getElementById("p2").src="/icon/spock.png";
			document.getElementById("pcspock").style.backgroundColor = "rgb(41, 42, 42, 5)";
			document.getElementById("pcspock").style.borderRadius = "10%";
			break;
	}

}
//resumen
function resumenResultados(){

	puntuacion= "Puntuación " + contadorGanadas + "/" + contadorPerdidas;
	document.getElementById("puntuacion").textContent= puntuacion;

}
//funcion para resetear fondo de pantalla antes de cada partida

function resetFondoPc(){
	
			document.getElementById("pcpiedra").style.backgroundColor = "transparent";
			document.getElementById("pcpapel").style.backgroundColor = "transparent";
			document.getElementById("pctijeras").style.backgroundColor = "transparent";
			document.getElementById("pclagarto").style.backgroundColor = "transparent";
			document.getElementById("pcspock").style.backgroundColor = "transparent";

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