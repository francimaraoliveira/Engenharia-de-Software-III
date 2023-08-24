/* 3ª questão */

/*class Calculadora {
    private op1: number;
    private op2: number;

    constructor(a: number, b: number) {
        this.op1 = a;
        this.op2 = b;
    }

    op_somar() : number {
        return this.op1 + this.op2;
    }
    op_subtrair() : number {
        return this.op1 - this.op2;
    }

    op_multiplicar() : number {
        return this.op1 * this.op2;
    }

    op_dividir() : number{
        return this.op1 / this.op2;
    }
}

let c: Calculadora = new Calculadora(15, 3)
console.log("A soma tem resultado: ", c.op_somar());
console.log("A subtração tem resultado: ", c.op_subtrair());
console.log("A multiplicação tem resultado: ", c.op_multiplicar());
console.log("A divisão tem resultado: ", c.op_dividir());*/


class Calculadora {
    private op1: number;
    private op2: number;

    constructor(a: number, b: number) {
        this.validateOperands(a, b);
        this.op1 = a;
        this.op2 = b;
    }

    op_somar(): number {
        return this.op1 + this.op2;
    }

    op_subtrair(): number {
        return this.op1 - this.op2;
    }

    op_multiplicar(): number {
        return this.op1 * this.op2;
    }

    op_dividir(): number {
        if (this.op2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return this.op1 / this.op2;
    }

    private validateOperands(a: number, b: number): void {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Operandos inválidos.");
        }
    }
}

try {
    let c: Calculadora = new Calculadora(15, 3);
    console.log("A soma tem resultado: ", c.op_somar());
    console.log("A subtração tem resultado: ", c.op_subtrair());
    console.log("A multiplicação tem resultado: ", c.op_multiplicar());
    console.log("A divisão tem resultado: ", c.op_dividir());
} catch (error) {
    console.error("Erro:", error);
}