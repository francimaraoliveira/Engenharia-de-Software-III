public class ManipulacaoDeTexto {
    public String removerEspacos(String texto) {
        return texto.replaceAll("\\s+", "");
    }

    public String[] quebrarEmPalavras(String texto) {
        return texto.split("\\s+");
    }
}