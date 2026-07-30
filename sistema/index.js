
const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operadores = ["x", "÷", "+", "-","%", ".", "^"];
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
    let conta = Resultado.textContent;
    let operador;

    if(conta.includes("+")){
        operador = "+";
    }
    else if(conta.includes("-")){
        operador = "-";
    }
    else if(conta.includes("x")){
        operador = "x";
    }
    else if(conta.includes("÷")){
        operador = "÷";
    }
    else if(conta.includes("%")){
        operador = "%";
    }
    else if(conta.includes("^")){
        operador = "^";
    }
    let partes = conta.split(operador);

    let n1 = Number(partes[0]);
    let n2 = Number(partes[1]);

    let resultado;

    switch(operador){
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "x":
            resultado = n1 * n2;
            break;
        case "÷":
            resultado = n1 / n2;
            break;
        case "%":
            resultado = (n1 * n2)/100;
            break;
        case "^":
            resultado = n1 ** n2;
            break;
        
        default:
            if (partes[1] === undefined || partes === ""){
                resultado = n1;
                break;
            }
            
    }
    
    Resultado.textContent = resultado;
}

function Limpar(){
    let limpar = 0;
    document.getElementById("Resultado-Final").innerHTML = limpar;
}

function Apagar(){
    Resultado.textContent = Resultado.textContent.slice(0, -1);

    if(Resultado.textContent === ""){
        Resultado.textContent = "0";
    }
}