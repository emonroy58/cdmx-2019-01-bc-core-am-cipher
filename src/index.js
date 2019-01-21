document.getElementById('contCifrado').style.display='none';
document.getElementById('contdeCifrado').style.display='none';
document.getElementById("btnsMenu").style.display='none';
document.getElementById("btMenuPrinc").style.display='none';


//ACCION DEL BOTON INICIO: muestra el menu
const btnInicio = document.getElementById('Inicio');
btnInicio.addEventListener('click', ()=>{
    document.getElementById('btnsMenu').style.display='block'; 
    document.getElementById('portada').style.display='none'; 
});

//ACCION DEL BOTON MENU: Regresa al menu
const menu_btns = document.getElementById('btMenuPrinc');
menu_btns.addEventListener('click', ()=>{
    document.getElementById('btnsMenu').style.display='block'; 
    document.getElementById('portada').style.display='none'; 
    document.getElementById("btMenuPrinc").style.display='none';
    document.getElementById('contCifrado').style.display='none';
    document.getElementById('contdeCifrado').style.display='none';
});

//ACCION DEL BOTON "Cifrado de Palabras": Muestra el contenido para cifrar
const btnMenuCifra = document.getElementById('btCifrar');
btnMenuCifra.addEventListener('click', ()=>{
    document.getElementById('contCifrado').style.display='block'; 
    document.getElementById("btMenuPrinc").style.display='block';
    document.getElementById('btnsMenu').style.display='none'; 
    document.getElementById('portada').style.display='none';
    
});

//ACCION DEL BOTON "Decifrado de Palabras": Muestra el contenido para decifrar
const btnMenuDeCifra = document.getElementById('btDeCifrar');
btnMenuDeCifra.addEventListener('click', ()=>{
    document.getElementById('contdeCifrado').style.display='block'; 
    document.getElementById("btMenuPrinc").style.display='block';
    document.getElementById('btnsMenu').style.display='none'; 
    document.getElementById('portada').style.display='none';
    
});

//PROCEDIMIENTO CIFRAR
const btnCifra = document.getElementById('botonCifra'); //asignacion de btnDecifra a constante, para ejecutar funcion en la linea posterior
btnCifra.addEventListener('click', ()=>{
     document.getElementById('contCifrado').style.display='block'; 
     Cifrar ()
});

//funcion Cifrar, recibe los valores de HTML que ingresa el usuario
let offCifra = document.getElementById('offCifra');//;a variable offDecifra recibe el nivle de desplazamiento(offset)
let textCifrado = document.getElementById('txCifra');//la variable textDecifrado recibe el texto a decifrar

const Cifrar = () =>{ 
    textCifrado = textCifrado.value;
    let offCifrar = parseInt(offCifra.value);
    
    let resulCifra = window.cipher.encode(offCifrar, textCifrado);//carga los valores de HTML (argumentos) para pasar a la funcion decode y que esta se ejecute
    document.getElementById('resulCifra').innerHTML = resulCifra;//la variable resulDecifra recibe el resultado de la ejecucion de la funcion decode
   // console.log(resulCifra);
}

//PROCEDIMIENTO DECIFRAR
const btDeCifra = document.getElementById('btnDecifra'); //asignacion de btnDecifra a constante, para ejecutar funcion en la linea posterior
btDeCifra.addEventListener('click', ()=>{
     document.getElementById('contdeCifrado').style.display='block'; 
     Decifrar ()
});

//funcion Cifrar, recibe los valores de HTML que ingresa el usuario
let offDeCifra = document.getElementById('offDeCifra');//;a variable offDecifra recibe el nivle de desplazamiento(offset)
let textDeCifrado = document.getElementById('txDeCifra');//la variable textDecifrado recibe el texto a decifrar

const Decifrar = () =>{ 
    textDeCifrado = textDeCifrado.value;
    let offDeCifrar = parseInt(offDeCifra.value);
    
    let resulDeCifra = window.cipher.decode(offDeCifrar,textDeCifrado);//carga los valores de HTML (argumentos) para pasar a la funcion decode y que esta se ejecute
    document.getElementById('resulDeCifra').innerHTML = resulDeCifra;//la variable resulDecifra recibe el resultado de la ejecucion de la funcion decode
   // console.log(resulCifra);
}
