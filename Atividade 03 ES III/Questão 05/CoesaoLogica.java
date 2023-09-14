public class CoesaoLogica {
    private int[] dados;

    public CoesaoLogica(int[] dados) {
        this.dados = dados;
    }

    public int calcularSoma() {
        int soma = 0;
        for (int valor : dados) {
            soma += valor;
        }
        return soma;
    }

    public int calcularProduto() {
        int produto = 1;
        for (int valor : dados) {
            produto *= valor;
        }
        return produto;
    }

    public static void main(String[] args) {
        int[] dados = {1, 2, 3, 4, 5};
        CoesaoLogica exemplo = new CoesaoLogica(dados);

        int soma = exemplo.calcularSoma();
        System.out.println("Soma: " + soma);

        int produto = exemplo.calcularProduto();
        System.out.println("Produto: " + produto);
    }
}