// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto)
{
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    var result = Object.keys(objeto).map(function (key)  
    {   return [key, objeto[key]];
    }); return result;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
	let resultado = {};
	for (i = 0; i < string.length; i++)       
	{	 resultado[string.charAt(i)]=(isNaN(resultado[string.charAt(i)])) ? 1 : resultado[string.charAt(i)]+1; 
	} return resultado;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  	const moveCapitalToFront = (str = '') => 
  	{
  	let capitalIndex = 0;
   	const newStrArr = [];
   	for(let i = 0; i < str.length; i++)
	{
      		if(str[i] !== str[i].toLowerCase())
		{
         		newStrArr.splice(capitalIndex, 0, str[i]);
         		capitalIndex++;
      		}
		else
		{
         		newStrArr.push(str[i]);
      		};
   	};
   	return newStrArr.join('');
	};
	return(moveCapitalToFront(s));
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

    let arr = str.split(' ');var i = 0, len = arr.length;
    while (i < len)
    {    txt=arr[i];
             arr[i]=[...txt].reverse().join(""); i++;
    } return arr.join(' ');
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

	    numero = numero.toString();
	var largo  = Math.trunc(numero.length/2);
	var parte1 = numero.substring(0, largo);
	    parte1 =[...parte1].reverse().join("");
	var parte2 =  numero.slice(largo*-1);
	var result = (parte1 === parte2) ? 'Es capicua' : 'No es capicua';
        return result;

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.replace(/[a|b|c]/gi,'');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
    const  asc = arr.sort((a,b) => a.length - b.length);
    return asc ;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
   const arreglo = arreglo1.filter(value => arreglo2.includes(value));
  return arreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

