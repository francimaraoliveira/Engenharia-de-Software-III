public class Conta {
    private String numeroConta;
    private double saldo;

    public Conta(String numeroConta, double saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    public String getNumeroConta() {
        return numeroConta;
    }
    
    public double getSaldo() {
        return saldo;
    }

    public void atualizarSaldo(double novoSaldo) {
        this.saldo = novoSaldo;
    }
}