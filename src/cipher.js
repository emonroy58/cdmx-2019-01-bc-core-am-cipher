

window.cipher = {
   encode: (offset,textRecibido) =>{
     let result = [];
 
  for(let i = 0; i < textRecibido.length; i++)
       {
         //console.log(textRecibido.charAt(i));
         let posicion = textRecibido.charCodeAt(i);//posicion en CodAsc
         //console.log(posicion);
           let posFin =((posicion-65+offset)% 26 +65); //calcular posicion Cipher
          // console.log(posFin);
         result.push(String.fromCharCode(posFin));//agrega nuevas letras al arreglo
         //console.log(result);
       }
         let resultado = result.join('');
        //console.log(result);
    return resultado;
    } 
    
};
