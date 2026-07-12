
const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const Resultado = document.getElementById("Resultado-Final");

function Num_Inicial(){
   Resultado.textContent = numero[0]
}

function Sistema(indice){
    if (Resultado.textContent === "0") {
        Resultado.textContent = numero[indice];
        
    }else {
        Resultado.textContent += numero[indice];
    } 
}
document.addEventListener("DOMContentLoaded", Num_Inicial);

function Limpar(){
    let limpar = 0;
    document.getElementById("Resultado-Final").innerHTML = limpar;
}
