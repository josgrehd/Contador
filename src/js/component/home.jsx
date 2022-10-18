import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let contar=0;
	let stop;
	let cuantasVeces=prompt("cuantas veces vas a contar ? , luego presiona INICIAR")
	let numero=parseInt(cuantasVeces)
	let cuenta = () =>{
		if(contar<numero){
			document.getElementById("cuenta").innerHTML = (contar+=1);
		}
		else{
			alert("ya ha terminado la cuenta, si deseas ingresar cuantas veces vas a contar, presiona REINICAR")
			document.getElementById("cuenta").innerHTML = (contar); 
		    clearInterval(stop);
		}
	
}
let cuentaAtras = () =>{
	if(contar<numero){
		document.getElementById("cuenta").innerHTML = (contar-=1);
		if(contar<=0){
			alert("ya ha terminado la cuenta, si deseas ingresar cuantas veces vas a contar, presiona REINICAR")
			document.getElementById("cuenta").innerHTML = (contar); 
			clearInterval(stop);
	}
}

}
let contador =()=>{
	stop=setInterval(cuenta,1000)
}
let contadorAtras =()=>{
	stop=setInterval(cuentaAtras,1000)
}
let detener =()=>{
	clearInterval(stop);
}
let reiniciar =()=>{
	location.reload();
}
	return (
			<div className="container text-center">
			<div className="row">
			<h1 className="mt-5 col-12">Contador</h1>
			<p className="col-12" id="cuenta"></p>
			<div className="col-3"><button onClick={contador}>INICIAR</button></div>
			<div className="col-3"><button onClick={detener}>DETENER</button></div>
			<div className="col-3"><button onClick={reiniciar}>REINICIAR</button></div>
			<div className="col-3"><button onClick={contadorAtras}>CUENTA ATRAS</button></div>
			</div>
		</div>
	)
	;
};




export default Home;
