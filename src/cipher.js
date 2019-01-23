

window.cipher = {
  encode: (offsetCifra,txtRecibeCifra) =>{
    let resulCifra = [];
  for(let i = 0; i < txtRecibeCifra.length; i++)
      {
        let posicionCifra = txtRecibeCifra.charCodeAt(i);
        if((posicionCifra>=32 && posicionCifra<=64) || (posicionCifra>=123 && posicionCifra<=254))//toma rango de simbolos, si la posiscion se encuentra en ese rango conserva la posicion inicial
        {
           resulCifra.push(String.fromCharCode(posicionCifra));
        }
         else if(txtRecibeCifra.charAt(i) === txtRecibeCifra.charAt(i).toUpperCase())
        {
          //console.log(txtRecibeCifra.charAt(i));
          let posicionCifra = txtRecibeCifra.charCodeAt(i);//posicion en CodAsc
          //console.log(posicionCifra);
          let posFinCifra =((posicionCifra-65+offsetCifra)% 26 +65); //calcular posicion Cipher
          // console.log(posFinCifra);
          resulCifra.push(String.fromCharCode(posFinCifra));//agrega nuevas letras al arreglo
         //console.log(result);
        } 
       else if(txtRecibeCifra.charAt(i) === txtRecibeCifra.charAt(i).toLowerCase())
       {
         //console.log(txtRecibeCifra.charAt(i));
         let posicionCifra = txtRecibeCifra.charCodeAt(i);//posicion en CodAsc
         //console.log(posicionCifra);
         let posFinCifra =((posicionCifra-97+offsetCifra)% 26 +97); //calcular posicion Cipher
         // console.log(posFinCifra);
         resulCifra.push(String.fromCharCode(posFinCifra));//agrega nuevas letras al arreglo
        //console.log(result);
       }
      
      }
    let resultadoCifra = resulCifra.join('');
    //console.log(result);
   return resultadoCifra;
   },


decode: (offsetDec,textRecibidoDec) =>{
  let resultDec = [];
  for(let i = 0; i < textRecibidoDec.length; i++)
      {
        let posicionDec = textRecibidoDec.charCodeAt(i);
          if((posicionDec>=32 && posicionDec<=64) || (posicionDec>=123 && posicionDec<=254))
         {
          resultDec.push(String.fromCharCode(posicionDec));
         } 
          else if(textRecibidoDec.charAt(i) === textRecibidoDec.charAt(i).toUpperCase())
          {
            //console.log(textRecibido.charAt(i));
            let posicionDec = textRecibidoDec.charCodeAt(i);//posicion en CodAsc
            //console.log(posicion);
            let posFinDec =((posicionDec+65-offsetDec)% 26 +65); //calcular posicion Cipher
            // console.log(posFin);
            resultDec.push(String.fromCharCode(posFinDec));//agrega nuevas letras al arreglo
            //console.log(result);
          } 
          else if (textRecibidoDec.charAt(i) === textRecibidoDec.charAt(i).toLowerCase())
          { 
             //console.log(textRecibidoDec.charAt(i));
             let posicionDec = textRecibidoDec.charCodeAt(i);//posicion en CodAsc
             //console.log(posicionDec);
             let posFinDec =((posicionDec-122-offsetDec)% 26 +122); //calcular posicion Cipher
             //console.log(posFinDec);
             resultDec.push(String.fromCharCode(posFinDec));//agrega nuevas letras al arreglo
             //console.log(resultDec);
          }  
        }
          let resultadoDec = resultDec.join('');
         //console.log(resultadoDec);
     return resultadoDec;
     }
}



