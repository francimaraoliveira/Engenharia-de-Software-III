//Código antes de refatorar
//public class Pedido {
//    private Produto produto;

//    public Pedido() {
//       this.produto = new Produto();
//    }

//    public void realizarPedido() {
//        produto.enviarProduto();
//    }
//}

public class Pedido {
    private Produto produto;

    public Pedido(Produto produto) {
        this.produto = produto;
    }

    public void realizarPedido() {
        produto.enviarProduto();
    }
}