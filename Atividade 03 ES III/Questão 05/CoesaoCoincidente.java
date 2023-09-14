public class CoesaoCoincidente {
    private int dadoA;
    private int dadoB;

    public void metodoA() {
        System.out.println("Executando o método A");
        // Realiza alguma operação com dadoA
    }

    public void metodoB() {
        System.out.println("Executando o método B");
        // Realiza alguma operação com dadoB
    }

    public static void main(String[] args) {
        CoesaoCoincidente exemplo = new CoesaoCoincidente();
        exemplo.metodoA();
        exemplo.metodoB();
    }
}