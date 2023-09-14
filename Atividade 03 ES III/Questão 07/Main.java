public class Main {
    public static void main(String[] args) {
        Produto produto = new Produto();
        Pedido pedido = new Pedido(produto);
        pedido.realizarPedido();
    }
}