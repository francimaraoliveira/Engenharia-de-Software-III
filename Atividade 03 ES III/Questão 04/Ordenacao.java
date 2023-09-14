import java.util.Random;

public class Ordenacao {
    public void ordenar(int[] array) {
        for (int i = 0; i < array.length-1; i++) {
            for (int j = 0; j < array.length-i-1; j++) {
                if (array[j] > array[j+1]) {
                    // Troca os elementos
                    int temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
    }

    public void embaralhar(int[] array) {
        Random rand = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int index = rand.nextInt(i + 1);
            // Troca os elementos
            int temp = array[index];
            array[index] = array[i];
            array[i] = temp;
        }
    }
}