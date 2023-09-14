public class Cliente {
    private int id;
    private String nome;
    private String endereco;
    private Conta conta;
    private Compra compra;

    public Cliente(int id, String nome, String endereco, Conta conta) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.conta = conta;
        this.compra = compra;
    }

    public void exibirInformacoes() {
        System.out.println("ID: " + id);
        System.out.println("Nome: " + nome);
        System.out.println("Endereço: " + endereco);
        System.out.println("Número da Conta: " + conta.getNumeroConta());
        System.out.println("Saldo: " + conta.getSaldo());
    }

    public void realizarCompra() {
        double novoSaldo = conta.getSaldo() - compra.getValorCompra();
        conta.atualizarSaldo(novoSaldo);
    }
}