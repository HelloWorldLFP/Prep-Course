# Definiciones

## Objetos

Tipo de datos abstracto definido por el programador que puede incluir múltiples propiedades, métodos e incluso otros objetos. 

## Propiedades

Asociación entre un nombre y un valor, es una característica particular de una clase incluyendo sus atributos y relaciones.

## Métodos

Procedimiento asociado con un mensaje y un objeto

## Bucle for…in

Bucle para iterar un objeto

## Notación de puntos vs notación de corchetes

La notación de puntos es más frecuente por ser más facil de leer

let objeto =
{
perro:'guau',
vaca:'muu'
}

let sonido = objeto.vaca;

console.log(sonido); // muu


VS

let sonido=objeto['vaca'];
console.log(sonido); // muu

El método de corchetes es útil para pasar variables.


