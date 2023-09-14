public class Post implements Conteudo {
    private String conteudo;

    public Post(String conteudo) {
        this.conteudo = conteudo;
    }

    public String getConteudo() {
        return conteudo;
    }
}