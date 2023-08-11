import java.util.ArrayList;
import java.util.List;

interface Departamento {
    void imprimirInfo();
}

class Funcionario implements Departamento {
    private String nome;
    private int idFuncionario;

    public Funcionario(String nome, int idFuncionario) {
        this.nome = nome;
        this.idFuncionario = idFuncionario;
    }

    public void imprimirInfo() {
        System.out.println("Funcionário: " + nome + " (ID: " + idFuncionario + ")");
    }
}

class Gerente implements Departamento {
    private String nome;
    private int idGerente;

    public Gerente(String nome, int idGerente) {
        this.nome = nome;
        this.idGerente = idGerente;
    }

    public void imprimirInfo() {
        System.out.println("Gerente: " + nome + " (ID: " + idGerente + ")");
    }
}

class Empresa {
    private List<Departamento> departamentos;

    public Empresa() {
        departamentos = new ArrayList<>();
    }

    public void adicionarDepartamento(Departamento departamento) {
        departamentos.add(departamento);
    }

    public void imprimirInformacoesDepartamentos() {
        for (Departamento departamento : departamentos) {
            departamento.imprimirInfo();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Empresa empresa = new Empresa();
        empresa.adicionarDepartamento(new Funcionario("João da Silva", 1001));
        empresa.adicionarDepartamento(new Gerente("Maria Souza", 2001));

        empresa.imprimirInformacoesDepartamentos();
    }
}
