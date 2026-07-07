// function Sistema(){
//     let numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     document.getElementById("Resultado-Final").innerHTML = numero;
// }

// function Limpar(){
//     let limpar = 0;
//     document.getElementById("Resultado-Final").innerHTML = limpar;
// }

class Calculadora{
    constructor(numero){
        this.numero = numero;
    }

    Sistema(){
        let numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        document.getElementById("Resultado-Final").innerHTML = numero;
    }
    Limpar(){
        let limpar = 0;
        document.getElementById("Resultado-Final").innerHTML = limpar;
    }
}

const calculadora = new Calculadora();
calculadora.Sistema();
calculadora.Limpar();