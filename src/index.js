let textRec;
let off;
let resul;


const botton = document.getElementById('boton'); //ejecuta funcion
botton.addEventListener('click', ()=>{
    myfuncion()
});

function myfuncion(){
  
  textRec= document.getElementById('txReci').value;//recibe Texto a Cifrar
  //console.log(textRec);
 
  off= document.getElementById('offs').value; //Recibe nivel de Offset
  //console.log(off);
 
 resul = window.cipher.encode(off,textRec)
 document.getElementById('resulCifrar').innerHTML=resul;
}
