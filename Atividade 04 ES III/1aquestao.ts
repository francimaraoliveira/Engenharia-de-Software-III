class Post {
    private id: number;
    private texto: string;
    private autor: Autor;
    private data: Date;
    private quantidadeDeLikes: number;

    constructor(id: number, texto: string, autor: Autor, data: Date) {
        this.id = id;
        this.texto = texto;
        this.autor = autor;
        this.data = new Date(data.getTime());
        this.quantidadeDeLikes = 0;
    }

    getId(): number {
        return this.id;
    }

    getTexto(): string {
        return this.texto;
    }

    getAutor(): Autor {
        return this.autor;
    }

    getData(): Date {
        return new Date(this.data.getTime());
    }

    getQuantidadeDeLikes(): number {
        return this.quantidadeDeLikes;
    }
}

class Autor {
    private id: number;
    private nome: string;
    private email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    // Métodos de acesso (getters) aqui.
}

class RepositorioDePosts {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    savePostToFile(post: Post): void {
        // Lógica para salvar o post em um arquivo aqui
    }

    readPostFromFile(): Post | null {
        // Lógica para ler um post de um arquivo aqui
        return null; // Substitua isso com a lógica real
    }
}

// Exemplo de utilização:

const autor = new Autor(1, "Autor Teste", "autor@teste.com");
const data = new Date();
const post = new Post(1, "Texto do Post", autor, data);

const repositorio = new RepositorioDePosts("caminho/do/arquivo.txt");
repositorio.savePostToFile(post);

// Para leitura:
const postLido = repositorio.readPostFromFile();
