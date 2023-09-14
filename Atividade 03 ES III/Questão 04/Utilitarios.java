public class Utilitarios {
    public static void main(String[] args) {
        // Testes para Ordenacao
        int[] arrayOrdenacao = {4, 1, 7, 3, 9, 2, 5};
        Ordenacao ordenacao = new Ordenacao();
        ordenacao.ordenar(arrayOrdenacao);

        System.out.println("Array ordenado:");
        for (int num : arrayOrdenacao) {
            System.out.print(num + " ");
        }
        System.out.println("\n");

        // Testes para ManipulacaoDeTexto
        String textoOriginal = "Exemplo de texto com espaços";
        ManipulacaoDeTexto manipulacao = new ManipulacaoDeTexto();

        String textoSemEspacos = manipulacao.removerEspacos(textoOriginal);
        System.out.println("Texto sem espaços: " + textoSemEspacos);

        String[] palavras = manipulacao.quebrarEmPalavras(textoOriginal);
        System.out.println("Palavras:");
        for (String palavra : palavras) {
            System.out.println(palavra);
        }
        System.out.println();

        // Testes para CalculosEstatisticos
        double[] numeros = {1.5, 2.7, 3.3, 4.1, 5.9};
        CalculosEstatisticos calculos = new CalculosEstatisticos();

        double media = calculos.calcularMedia(numeros);
        System.out.println("Média: " + media);

        double desvioPadrao = calculos.calcularDesvioPadrao(numeros);
        System.out.println("Desvio Padrão: " + desvioPadrao);
    }
}