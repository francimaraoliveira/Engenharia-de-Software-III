/* 1ª questão */
/* Código do meu repositório de POO */

/*class Triangulo {
    l1: number;
    l2: number;
    l3: number;
    constructor(lado1: number, lado2: number, lado3: number) {
        this.l1 = lado1;
        this.l2 = lado2;
        this.l3 = lado3;
    }
    ehTriangulo(): boolean {
        if (this.l1 + this.l2 > this.l3 && this.l2 + this.l3 > this.l1 && this.l1 + this.l3 > this.l2) {
            return true;
        } else {
            return false;
        }
    }
    ehIsoceles(): boolean {
        if(this.l1 == this.l2 || this.l2 == this.l3 || this.l1 == this.l3) {
            return true;
        } else {
            return false;
        }        
    }
    ehEscaleno(): boolean {
        if(this.l1 != this.l2 && this.l2 != this.l3 && this.l1 != this.l3) {
            return true;
        } else {
            return false;
        }        
    }
    ehEquilatero(): boolean {
        if(this.l1 == this.l2 && this.l2 == this.l3) {
            return true;
        } else {
            return false;
        }        
    }

let triangulo : Triangulo = new Triangulo(5, 7, 9);
console.log(triangulo.ehTriangulo());
console.log(triangulo.ehIsoceles());
console.log(triangulo.ehEscaleno());
console.log(triangulo.ehEquilatero());
} */

/* Versão melhorada */
class Triangulo {
    l1: number;
    l2: number;
    l3: number;

    constructor(lado1: number, lado2: number, lado3: number) {
        this.l1 = lado1;
        this.l2 = lado2;
        this.l3 = lado3;
    }

    ehTriangulo(): boolean {
        return this.l1 + this.l2 > this.l3 && this.l2 + this.l3 > this.l1 && this.l1 + this.l3 > this.l2;
    }

    ehIsoceles(): boolean {
        return this.l1 === this.l2 || this.l2 === this.l3 || this.l1 === this.l3;
    }

    ehEscaleno(): boolean {
        return this.l1 !== this.l2 && this.l2 !== this.l3 && this.l1 !== this.l3;
    }

    ehEquilatero(): boolean {
        return this.l1 === this.l2 && this.l2 === this.l3;
    }
}

let triangulo: Triangulo = new Triangulo(5, 7, 9);

console.log("É um triângulo?", triangulo.ehTriangulo());
console.log("É isósceles?", triangulo.ehIsoceles());
console.log("É escaleno?", triangulo.ehEscaleno());
console.log("É equilátero?", triangulo.ehEquilatero());