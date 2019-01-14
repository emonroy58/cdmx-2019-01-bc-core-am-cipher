let textRecibido ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
window.cipher = {
   encode: () =>{
     let result = [];
    // document.getElementById("txReci").innerHTML = textRecibido;
    // console.log(textRecibido); 
  for(let i = 0; i <= textRecibido.length; i++)
       {
         console.log(textRecibido.charAt(i));
         let posicion = textRecibido.charCodeAt(i);//posicion en CodAsc
         console.log(posicion);
           let posFin =((posicion-65+33)% 26 +65); //calcular posicion Cipher
           console.log(posFin);
         result.push(String.fromCharCode(posFin));//agrega nuevas letras al arreglo
         console.log(result);
       }
         let resulFin = result.join('');
         document.getElementById('resulCifrar').innerHTML=resulFin;
         
    console.log(resulFin);

    } 
    
};
