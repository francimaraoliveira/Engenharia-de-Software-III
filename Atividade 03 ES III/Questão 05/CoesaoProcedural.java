import java.util.ArrayList;
import java.util.List;

public class CoesaoProcedural {
    private List<Integer> numeros = new ArrayList<>();

    public void adicionarNumero(int numero) {
        numeros.add(numero);
    }

    public void removerNumero(int numero) {
        numeros.remove(Integer.valueOf(numero));
    }

    public int calcularSoma() {
        int soma = 0;
        for (int numero : numeros) {
            soma += numero;
        }
        return soma;
    }

    public double calcularMedia() {
        int soma = calcularSoma();
        return (double) soma / numeros.size();
    }

    public static void main(String[] args) {
        CoesaoProcedural exemplo = new CoesaoProcedural();

        // Procedimento: Adicionar números
        exemplo.adicionarNumero(10);
        exemplo.adicionarNumero(20);
        exemplo.adicionarNumero(30);

        // Procedimento: Remover número
        exemplo.removerNumero(20);

        // Procedimento: Calcular a soma
        int soma = exemplo.calcularSoma();
        System.out.println("Soma: " + soma);

        // Procedimento: Calcular a média
        double media = exemplo.calcularMedia();
        System.out.println("Média: " + media);
    }
}