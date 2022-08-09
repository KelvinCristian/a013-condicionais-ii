// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
const num = Number(prompt("ensira um numero"))
// Faça isso:
    
// 1. Utilizando ifs aninhados
// ```jsx
//     if(num % 2 === 0){
//         console.log("este numero e divisivel por 2")
//          if(num % 3 === 0){
// console.log("este numero e divisivel por 3")
//         }else{
//             console.log("nao e divisivel por 3")
//         }
//     }else {
//         console.log("nao e divisivel por 2") 
//     }
// ```
// 2. Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
     if(num % 2 === 0 && num % 3 === 0){
    console.log("numero e divisivel por 2 e 3")
     }else {
        console.log(" este numero nao e divisivel por 2 e 3 ao mesmo tempo")
     }
// ```
 

