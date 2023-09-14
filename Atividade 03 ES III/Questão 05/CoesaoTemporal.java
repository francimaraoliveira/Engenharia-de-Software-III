public class CoesaoTemporal {
    private int dado;

    public void inicializarDado(int valor) {
        System.out.println("Inicializando o dado com valor: " + valor);
        this.dado = valor;
    }

    public void atualizarDado(int novoValor) {
        if (dado != 0) {
            System.out.println("Atualizando o dado de " + dado + " para " + novoValor);
            this.dado = novoValor;
        } else {
            System.out.println("O dado ainda não foi inicializado.");
        }
    }

    public int getDado() {
        return this.dado;
    }

    public static void main(String[] args) {
        CoesaoTemporal exemplo = new CoesaoTemporal();
        
        // Inicialização
        exemplo.inicializarDado(10);

        // Atualização
        exemplo.atualizarDado(20);
        exemplo.atualizarDado(30);

        // Tentando atualizar antes de inicializar
        exemplo.atualizarDado(40);
    }
}