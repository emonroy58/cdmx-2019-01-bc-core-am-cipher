


const botton = document.getElementById('boton'); //ejecuta funcion
botton.addEventListener('click', ()=>{
    myCifrar()
});


let textRec;
let off;
let resul;
function myCifrar(){

  textRec= document.getElementById('txReci');//recibe Texto a Cifrar
  //console.log(textRec);
 
  off= document.getElementById('offs'); //Recibe nivel de Offset
  //console.log(off);
 
 resul = window.cipher.encode(off.value,textRec.value) //carga los valores de HTML (argumentos) para pasar a la funcion encode yque esta se ejecute
 document.getElementById('resulCifrar').innerHTML=resul;
}



const btnDecifrado = document.getElementById('decifra'); //asignacion de btnDecifra a constante, para ejecutar funcion en la linea posterior
btnDecifrado.addEventListener('click', ()=>{

     Decifrar()
});
let textDecifrado;
let offDecifra;
let resulDecifra;
//la funcion recibe los valores de HTML que ingresa el usuario
function Decifrar(){
    textDecifrado = document.getElementById('txDecifra').value;//la variable textDecifrado recibe el texto a decifrar
    offDecifra = document.getElementById('offsDecifra').value;//;a variable offDecifra recibe el nivle de desplazamiento(offset)

    resulDecifra = window.cipher.decode(offDecifra, textDecifrado);//carga los valores de HTML (argumentos) para pasar a la funcion decode y que esta se ejecute
    document.getElementById('resulDecifrar').innerHTML = resulDecifra;//la variable resulDecifra recibe el resultado de la ejecucion de la funcion decode
   // console.log(resulDecifra);




}
