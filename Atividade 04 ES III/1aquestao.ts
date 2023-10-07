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

    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    getEmail(): string {
        return this.email;
    }
}

class RepositorioDePosts {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    savePostToFile(post: Post): void {
        const fs = require('fs'); // Módulo para manipulação de arquivos em Node.js
        const postString = JSON.stringify(post); // Converte o objeto post para uma string JSON

        fs.writeFileSync(this.filePath, postString); // Escreve no arquivo
    }

    readPostFromFile(): Post | null {
        const fs = require('fs');
        
        try {
            const fileContent = fs.readFileSync(this.filePath, 'utf8');
            const postObject = JSON.parse(fileContent); // Converte a string JSON de volta para um objeto

            // Cria uma nova instância de Post a partir do objeto lido do arquivo
            const post = new Post(
                postObject.id,
                postObject.texto,
                new Autor(postObject.autor.id, postObject.autor.nome, postObject.autor.email),
                new Date(postObject.data)
            );

            return post;
        } catch (error) {
            // Se houver um erro ao ler o arquivo, retorna null
            return null;
        }
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