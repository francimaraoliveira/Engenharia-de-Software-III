import java.util.ArrayList;
import java.util.List;

public class Usuario {
    private List<Conteudo> conteudos;

    public Usuario() {
        this.conteudos = new ArrayList<>();
    }

    public void criarConteudo(String conteudo) {
        Conteudo novoConteudo = new Post(conteudo); // Ou new Comentario(conteudo);
        conteudos.add(novoConteudo);
    }

    public List<Conteudo> getConteudos() {
        return conteudos;
    }
}