public class CalculosEstatisticos {
    public double calcularMedia(double[] numeros) {
        double soma = 0;
        for (double numero : numeros) {
            soma += numero;
        }
        return soma / numeros.length;
    }

    public double calcularDesvioPadrao(double[] numeros) {
        double media = calcularMedia(numeros);
        double somaDiferencaQuadrada = 0;

        for (double numero : numeros) {
            double diferenca = numero - media;
            somaDiferencaQuadrada += diferenca * diferenca;
        }

        double variancia = somaDiferencaQuadrada / (numeros.length - 1);
        return Math.sqrt(variancia);
    }
}