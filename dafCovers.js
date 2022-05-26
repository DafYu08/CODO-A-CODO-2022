function openStyle (evt, styleName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

//FORMULARIO
var inputs = document.getElementsByClassName('formulario_input');
for (var i=0; i<inputs.length; i++){
	inputs[i].addEventListener('keyup', function () {
		if (this.value.length>=1){
			this.nextElementSibling.classList.add('fijar');
		}else{
			this.nextElementSibling.classList.remove('fijar');
		}
	});
}
//Hasta acá anda todo joya!!

//Aca solo intento evaluar el nombre y no hace nada
(function(){
	//Variables
	var formulario = document.getElementsById('form')[0],
		//elementos = formulario.elements,
		boton = document.getElementById('button');

	var validarNombre = function(e){
		if (formulario.nombres.value == 0){
			alert("Completa el campo nombre");
			e.preventDefault();
		}
	};


	var validar = function(e){
		validarNombre(e);
	};

	formulario.addEventListener("submit", validar);
}())

//Intento validad nombre, email y teléfono y no hace nada
const nombres = document.getElementById(nombres)
const correo = document.getElementById(correo)
const telefono = document.getElementById(telefono)
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=> {
	e.preventDefault()
	let warnings = ""
	let entrar = false
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
	if(nombres.value.lenght<6){
		warnings += "El nombre no es valido<br>"
		entrar = true
	}
	console.log(regexEmail.test(correo.value))
	if(!regexEmail.test(correo.value)){
		warnings+= "El email no es valido<br>"
		entrar = true
	}
	//NO SÉ CÓMO HACER LA VALIDACIÓN NUMÉRICA!!. Es decir, que el telefono solo pueda ser de tipo int.
	if (entrar){
		parrafo.innerHTML = warnings
	}else{
		parrafo.innerHTML = "Enviado"
	}

})