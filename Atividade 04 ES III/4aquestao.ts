interface Validacao {
    validar(): void;
}

class ValidacaoCPF implements Validacao {
    private cpf: string;

    constructor(cpf: string) {
        this.cpf = cpf;
    }

    validar(): void {
        if (this.cpf.length !== 11) {
            throw new Error("CPF deve ter 11 caracteres");
        }
    }
}

class ValidacaoRendimentosDespesas implements Validacao {
    private rendimentos: number[];
    private despesas: number[];

    constructor(rendimentos: number[], despesas: number[]) {
        this.rendimentos = rendimentos;
        this.despesas = despesas;
    }

    validar(): void {
        if (this.rendimentos.some(valor => valor < 0) || this.despesas.some(valor => valor < 0)) {
            throw new Error("Rendimentos e despesas não podem ser negativos");
        }
    }
}

class ValidacaoNumeroRendimentos implements Validacao {
    private rendimentos: number[];

    constructor(rendimentos: number[]) {
        this.rendimentos = rendimentos;
    }

    validar(): void {
        if (this.rendimentos.length > 5) {
            throw new Error("Não podem existir mais que 5 rendimentos");
        }
    }
}

class CalculadoraImpostoDeRenda {
    calcularImposto(rendimentos: number[], despesas: number[]): number {
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

    processar(validacoes: Validacao[]): void {
        for (const validacao of validacoes) {
            validacao.validar();
        }

        const calculadora = new CalculadoraImpostoDeRenda();
        const impostoDevido = calculadora.calcularImposto(this.rendimentos, this.despesas);

        const relatorio = new RelatorioImpostoRenda();
        relatorio.gerarRelatorio(this.cpfContribuinte, this.rendimentos, this.despesas, impostoDevido);
    }
}

// Exemplo de uso
const contribuinte = new ImpostoDeRenda("12345678901", [50000, 10000], [20000, 5000]);

const validacoes: Validacao[] = [
    new ValidacaoCPF(contribuinte.cpfContribuinte),
    new ValidacaoRendimentosDespesas(contribuinte.rendimentos, contribuinte.despesas),
    new ValidacaoNumeroRendimentos(contribuinte.rendimentos)
];

try {
    contribuinte.processar(validacoes);
    console.log("Processamento bem sucedido!");
} catch (error) {
    console.error(error.message);
}