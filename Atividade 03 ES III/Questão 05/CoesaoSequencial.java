import java.util.ArrayList;
import java.util.List;

public class CoesaoSequencial {
    private List<String> carrinho = new ArrayList<>();
    private double total = 0.0;

    public void adicionarItem(String item, double preco) {
        carrinho.add(item);
        total += preco;
        System.out.println("Item adicionado: " + item);
    }

    public void removerItem(String item, double preco) {
        carrinho.remove(item);
        total -= preco;
        System.out.println("Item removido: " + item);
    }

    public void finalizarCompra() {
        System.out.println("Compra finalizada. Total: " + total);
        // Aqui poderiam ocorrer operações adicionais, como atualização de estoque, geração de nota fiscal, etc.
    }

    public static void main(String[] args) {
        CoesaoSequencial exemplo = new CoesaoSequencial();

        // Sequência de operações de compra
        exemplo.adicionarItem("Produto A", 50.0);
        exemplo.adicionarItem("Produto B", 30.0);
        exemplo.removerItem("Produto A", 50.0);
        exemplo.finalizarCompra();
    }
}