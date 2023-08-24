/* 5ª questão Polimorfismo */

abstract class Triangulo {
    l1: number;
    l2: number;
    l3: number;

    constructor(lado1: number, lado2: number, lado3: number) {
        this.l1 = lado1;
        this.l2 = lado2;
        this.l3 = lado3;
    }

    abstract verificarTipo(): string;
}

class TrianguloEquilatero extends Triangulo {
    verificarTipo(): string {
        return "Equilátero";
    }
}

class TrianguloIsosceles extends Triangulo {
    verificarTipo(): string {
        return "Isósceles";
    }
}

class TrianguloEscaleno extends Triangulo {
    verificarTipo(): string {
        return "Escaleno";
    }
}

let triangulo: Triangulo = new TrianguloEquilatero(5, 5, 5);
console.log("Tipo do triângulo:", triangulo.verificarTipo());