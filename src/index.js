/*let textRec;
let off;
let resul;


const botton = document.getElementById('boton'); //ejecuta funcion
botton.addEventListener('click', ()=>{
    funCifrar()
});

function funCifrar(){
  
  textRec= document.getElementById('txReci').value;//recibe Texto a Cifrar
  //console.log(textRec);
 
  off= document.getElementById('offs').value; //Recibe nivel de Offset
  //console.log(off);
 
 resul = window.cipher.encode(off,textRec) //carga los valores de HTML (argumentos) para pasar a la funcion encode yque esta se ejecute
 document.getElementById('resulCifrar').innerHTML=resul;
}*/



let textDecifrado;
let offDecifra;
let resulDecifra;

const btnDecifrado = document.getElementById('btnDecifra'); //asignacion de btnDecifra a constante, para ejecutar funcion en la linea posterior
btnDecifrado.addEventListener('click', ()=>{

     Decifrar()
});

//la funcion recibe los valores de HTML que ingresa el usuario
function Decifrar(){
        
    textDecifrado = document.getElementById('txDecifra');//la variable textDecifrado recibe el texto a decifrar
    offDecifra = document.getElementById('offsDecifra');//;a variable offDecifra recibe el nivle de desplazamiento(offset)

    resulDecifra = window.cipher.decode(textDecifrado,offDecifra)//carga los valores de HTML (argumentos) para pasar a la funcion decode y que esta se ejecute
    document.getElementById('resulDecifrar').innerHTML = resulDecifra;//la variable resulDecifra recibe el resultado de la ejecucion de la funcion decode

}
