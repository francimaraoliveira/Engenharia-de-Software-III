import java.util.HashMap;
import java.util.Map;

public class CoesaoComunicacao {
    private Map<String, String> bancoDeDados = new HashMap<>();

    public void adicionarRegistro(String chave, String valor) {
        bancoDeDados.put(chave, valor);
    }

    public String obterRegistro(String chave) {
        return bancoDeDados.get(chave);
    }

    public void removerRegistro(String chave) {
        bancoDeDados.remove(chave);
    }

    public static void main(String[] args) {
        CoesaoComunicacao exemplo = new CoesaoComunicacao();

        // Comunicação: Adicionar registro no banco de dados
        exemplo.adicionarRegistro("chave1", "valor1");
        exemplo.adicionarRegistro("chave2", "valor2");

        // Comunicação: Obter registro do banco de dados
        String valor = exemplo.obterRegistro("chave1");
        System.out.println("Valor obtido: " + valor);

        // Comunicação: Remover registro do banco de dados
        exemplo.removerRegistro("chave2");
    }
}