//declarar de las variables
let nameBox;
let button;
let optionSelected;

//inicialización de las variables

function initVariables(){
    nameBox = document.getElementById("nombre");
    button = document.getElementById("button");
    nameBox.focus();

}


//uso de las variables

window.addEventListener("load",()=>{


    initVariables();

    nameBox.addEventListener("input",()=>{
		if(nameBox.value.length >= 1 && nameBox.value.length <= 25 ){
			button.disabled = false; 
		}else{
			button.disabled = true; 
		}
	});

});