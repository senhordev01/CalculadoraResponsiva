
const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operadores = ["x", "÷", "+", "-","%"]
const Resultado = document.getElementById("Resultado-Final");

function Num_Inicial(){
   Resultado.textContent = numero[0]
}

function Sistema(indice){

    try{
        if(Resultado.textContent.length > 15){
            return;
        }if (Resultado.textContent === "0") {
            Resultado.textContent = numero[indice];
            
        }else{
            Resultado.textContent += numero[indice];

        }

        
    }catch(erro){
        console.log(erro.message);
    }

}
document.addEventListener("DOMContentLoaded", Num_Inicial);

function Limpar(){
    let limpar = 0;
    document.getElementById("Resultado-Final").innerHTML = limpar;
}

function operacoes(operador){
    try{
        const ultimo = Resultado.textContent.slice(-1);

        if(!operadores.includes(ultimo)){
            Resultado.textContent += operador;
        }

    }catch(erro){
        console.log(erro.message);
    }
}

function Calcular(){
    console.log("")
}