
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var aterrizado=false;
var pause = false;
//NAVE
var y = 0; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;

//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");

	
	//definición de eventos
	//mostrar menú móvil
    //	document.getElementById("showm").onclick = function () {
	//	document.getElementsByClassName("c")[0].style.display = "block";
	//	stop();
	//}
	//ocultar menú móvil
	//document.getElementById("hidem").onclick = function () {
	//	document.getElementsByClassName("c")[0].style.display = "none";
	//	start();
	//}
	//encender/apagar el motor al hacer click en la pantalla
	document.getElementById("nave").onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	document.getElementById("pausa").onclick = function(){
		if (pause == false){
			stop();
			motorOff();		
			c=c;
			pausa();
			pause = true;

		} 
	}
	
	document.getElementById("volver").onclick = function(){
		if(pause == true){
			reanudar();
			start();
			pause = false;
		}
	}
	document.getElementById("about").onclick = function(){
		about();
	}
	document.getElementById("volvermenu").onclick = function(){
		volvermenu();
	}
	//encender/apagar al apretar/soltar una tecla	
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover la nave justo después de cargar la página
	start();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}
function pausa(){
	document.getElementById("menu").style.display="block";
	//document.getElementById("pause").src="img/buttons/play.png";
}

function reanudar(){
	document.getElementById("menu").style.display="none";
	//document.getElementById("pause").src="img/buttons/pause.png";
}
function about(){
	document.getElementById("menu").style.display="none";
	document.getElementById("paginabout").style.display="block";
}
function volvermenu(){
	document.getElementById("menu").style.display="block";
	document.getElementById("paginabout").style.display="none";
}
function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	//Condición que impide que la velocidad alcance un valor negativo transformandola en positiva	
	if (v<0) {
		velocidad.innerHTML=(-v).toFixed(1);
	}
	else{ 
		velocidad.innerHTML=v.toFixed(1);
	}
	altura.innerHTML=(70-y).toFixed(1);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<=0){ 	
		document.getElementById("nave").style.top = "0%";
		v=-v;
	}
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} 
	else { 
		stop();
		altura.innerHTML='0.0';
		aterrizado=true;
	}
}
function motorOn(){
	//el motor da aceleración a la nave
	if (aterrizado){
		motorOff();
	}
	document.getElementById('navelol').src='img/navefuego.png';
	a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);	
}
function motorOff(){
	document.getElementById('navelol').src='img/nave.png';
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ) {
		c = 0;
		motorOff();
	}
	if (y>=70){
		combustible=c;
		stop();
		motorOff();
	}
	//combustible.innerHTML=c;
	combustible.innerHTML=c.toFixed(1);	
}