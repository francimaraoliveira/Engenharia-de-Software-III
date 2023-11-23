// Interface ou classe abstrata representando o comportamento de persistência
interface IPersistencia {
    salvar(dados: string, arquivo: string): void;
  }
  
  // Classe que implementa o comportamento de persistência em formato padrão
  class Persistencia implements IPersistencia {
    salvar(dados: string, arquivo: string): void {
      // Implementação da persistência padrão, por exemplo, salvar em arquivo de texto
      console.log(`Salvando dados (${dados}) em ${arquivo}`);
    }
  }
  
  // Classe que usa a persistência em formato JSON, utilizando composição
  class PersistenciaJSON {
    private persistencia: IPersistencia;
  
    constructor(persistencia: IPersistencia) {
      this.persistencia = persistencia;
    }
  
    salvar(dados: string, arquivo: string): void {
      if (!dados.startsWith("{")) {
        throw new Error("Dados não estão em formato JSON.");
      }
      // Utiliza a implementação de persistência fornecida
      this.persistencia.salvar(dados, arquivo);
    }
  }
  
  // Exemplo de uso:
  const persistenciaPadrao = new Persistencia();
  const persistenciaJSON = new PersistenciaJSON(persistenciaPadrao);
  
  // Salvando dados em formato JSON
  persistenciaJSON.salvar('{"nome": "José", "idade": 28}', 'dados.json');
  
  // Isso lançará um erro porque os dados não estão em formato JSON
  // persistenciaJSON.salvar('dados incorretos', 'dados_errados.json');