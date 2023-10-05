class CalculadoraImpostoDeRenda {
    calcular(rendimentos: number[], despesas: number[]): number {
        const rendaTotal = rendimentos.reduce((acc, valor) => acc + valor, 0);
        const despesaTotal = despesas.reduce((acc, valor) => acc + valor, 0);
        const baseCalculo = rendaTotal - despesaTotal;

        if (baseCalculo <= 1903.98) {
            return 0.0;
        }
        if (baseCalculo <= 2826.65) {
            return baseCalculo * 0.075 - 142.80;
        }
        // Adicione mais faixas conforme necessário

        return baseCalculo * 0.275 - 869.36; // Para base de cálculo acima de 4664.68
    }
}

class RelatorioImpostoRenda {
    gerarRelatorio(cpfContribuinte: string, rendimentos: number[], despesas: number[], impostoDevido: number): void {
        console.log("CPF: " + cpfContribuinte);
        console.log("Rendimentos: " + rendimentos);
        console.log("Despesas: " + despesas);
        console.log("Imposto Devido: " + impostoDevido);
    }
}

class ImpostoDeRenda {
    private cpfContribuinte: string;
    private rendimentos: number[];
    private despesas: number[];

    constructor(cpfContribuinte: string, rendimentos: number[], despesas: number[]) {
        this.cpfContribuinte = cpfContribuinte;
        this.rendimentos = rendimentos;
        this.despesas = despesas;
    }

    processar(): void {
        const calculadora = new CalculadoraImpostoDeRenda();
        const impostoDevido = calculadora.calcular(this.rendimentos, this.despesas);

        const relatorio = new RelatorioImpostoRenda();
        relatorio.gerarRelatorio(this.cpfContribuinte, this.rendimentos, this.despesas, impostoDevido);
    }
}

// Exemplo de uso
const contribuinte = new ImpostoDeRenda("12345678901", [50000, 10000], [20000, 5000]);
contribuinte.processar();
