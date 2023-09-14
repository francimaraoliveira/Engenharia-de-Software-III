public class CoesaoFuncional {
    public int somar(int a, int b) {
        return a + b;
    }

    public int subtrair(int a, int b) {
        return a - b;
    }

    public int multiplicar(int a, int b) {
        return a * b;
    }

    public int dividir(int a, int b) {
        if (b != 0) {
            return a / b;
        } else {
            throw new ArithmeticException("Divisão por zero não é permitida.");
        }
    }

    public static void main(String[] args) {
        CoesaoFuncional exemplo = new CoesaoFuncional();

        // Operações matemáticas
        int soma = exemplo.somar(10, 5);
        System.out.println("Soma: " + soma);

        int diferenca = exemplo.subtrair(10, 5);
        System.out.println("Diferença: " + diferenca);

        int produto = exemplo.multiplicar(10, 5);
        System.out.println("Produto: " + produto);

        int quociente = exemplo.dividir(10, 5);
        System.out.println("Quociente: " + quociente);
    }
}