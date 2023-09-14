import java.util.ArrayList;
import java.util.List;

enum TipoRelacionamento {
    AMIGO, SEGUIDOR, OUTRO_TIPO;
}

class Relacionamento {
    private TipoRelacionamento tipo;
    private Usuario remetente;
    private Usuario destinatario;

    public Relacionamento(TipoRelacionamento tipo, Usuario remetente, Usuario destinatario) {
        this.tipo = tipo;
        this.remetente = remetente;
        this.destinatario = destinatario;
    }

    // getters para tipo, remetente e destinatario
    
    public TipoRelacionamento getTipo() {
            return tipo;
        }
    
    public Usuario getRemetente() {
            return remetente;
        }
    
    public Usuario getDestinatario() {
            return destinatario;
        }
}

class Usuario {
    private List<Relacionamento> relacionamentos;

    public Usuario() {
        relacionamentos = new ArrayList<>();
    }

    public void adicionarRelacionamento(TipoRelacionamento tipo, Usuario destinatario) {
        Relacionamento novoRelacionamento = new Relacionamento(tipo, this, destinatario);
        relacionamentos.add(novoRelacionamento);
    }

    // Outros métodos relevantes

    public List<Relacionamento> getRelacionamentos() {
        return relacionamentos;
    }
}