// Define a interface Operacao
interface Operacao {
    executar(a: number, b: number): number;
}

// Implementa a interface para soma
class Soma implements Operacao {
    executar(a: number, b: number): number {
        return a + b;
    }
}

// Implementa a interface para subtração
class Subtracao implements Operacao {
    executar(a: number, b: number): number {
        return a - b;
    }
}

// Classe Calculadora
class Calculadora {
    private readonly a: number;
    private readonly b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    calcular(operacoes: Operacao[]): number[] {
        const resultados: number[] = [];
        for (const operacao of operacoes) {
            resultados.push(operacao.executar(this.a, this.b));
        }
        return resultados;
    }
}

// Exemplo de uso
const calculadora = new Calculadora(12, 6);

const operacoes: Operacao[] = [
    new Soma(),
    new Subtracao()
];

const resultados = calculadora.calcular(operacoes);
console.log(resultados);