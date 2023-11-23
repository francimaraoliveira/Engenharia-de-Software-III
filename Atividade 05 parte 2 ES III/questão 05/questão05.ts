interface Perfil {
    id: number;
    nomeUsuario: string;
  }
  
  interface Publicavel {
    exibir(): void;
    getAutor(): Perfil;
  }
  
  class Postagem implements Publicavel {
    private id: string;
    private autor: Perfil;
    private conteudo: string;
    private reacoes: Reacao[];
    private comentarios: Comentario[];
  
    constructor(id: string, autor: Perfil, conteudo: string) {
      this.id = id;
      this.autor = autor;
      this.conteudo = conteudo;
      this.reacoes = [];
      this.comentarios = [];
    }
  
    exibir(): void {
      console.log(`Postagem [${this.id}] de ${this.autor.nomeUsuario}: ${this.conteudo}`);
    }
  
    getAutor(): Perfil {
      return this.autor;
    }
  
    getId(): string { // Método para retornar o ID da postagem
      return this.id;
    }
  
    adicionarReacao(reacao: Reacao): void {
      this.reacoes.push(reacao);
    }
  
    adicionarComentario(comentario: Comentario): void {
      this.comentarios.push(comentario);
    }
  }
  
  class Reacao implements Publicavel {
    private tipoReacao: string;
    private postagem: Postagem;
    private autor: Perfil;
  
    constructor(tipoReacao: string, autor: Perfil, postagem: Postagem) {
      this.tipoReacao = tipoReacao;
      this.autor = autor;
      this.postagem = postagem;
    }
  
    exibir(): void {
      console.log(`Reação [${this.tipoReacao}] de ${this.autor.nomeUsuario} na postagem ${this.postagem.getId()}`);
    }
  
    getAutor(): Perfil {
      return this.autor;
    }
  }
  
  class Comentario implements Publicavel {
    private postagemOriginal: Postagem;
    private autor: Perfil;
    private conteudo: string;
  
    constructor(autor: Perfil, conteudo: string, postagemOriginal: Postagem) {
      this.autor = autor;
      this.conteudo = conteudo;
      this.postagemOriginal = postagemOriginal;
    }
  
    exibir(): void {
      console.log(`Comentário de ${this.autor.nomeUsuario} em resposta à postagem [${this.postagemOriginal.getId()}]: ${this.conteudo}`);
    }
  
    getAutor(): Perfil {
      return this.autor;
    }
  }  