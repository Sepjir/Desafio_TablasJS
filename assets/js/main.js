
//Numero que ingresará el usuario
var num1 = parseInt(prompt ("Ingrese un número entre el 1 al 20" , 15));

// // Validando que sea número y que esté entre 1 y 20)
while (isNaN(num1) || num1 < 1 || num1 > 20) {
    alert ("El número ingresado no está en el rango de 1 a 20")
    var num1 = parseInt(prompt("ingrese nuevamente un número entre 1 y 20" , "15"));
};

//Tablas de multiplicar
for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= 12; j++) {
        let tabla = (a,b) => {
           return a * b
        
        }
    
        console.log(`La tabla de ${i} x ${j} es igual a ${tabla(j,i)}`);  
    }
}

// Factorial del número ingresado
for (let i = 1; i <= num1; i++) {
    var factor = 1
    for (let j = 1; j <= i; j++) {
        factor = factor*j
        
    }
    console.log(`El factorial de ${i} es igual a: ${factor}`);
}