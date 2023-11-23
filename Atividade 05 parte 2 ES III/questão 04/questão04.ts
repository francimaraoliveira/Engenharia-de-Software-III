class Forma {
    area(): number {
      return 0;
    }
  
    // Métodos genéricos para todas as formas
    setLargura(largura: number) {}
    setAltura(altura: number) {}
  }
  
  class Retangulo extends Forma {
    constructor(protected largura: number, protected altura: number) {
      super();
    }
  
    setLargura(largura: number) {
      this.largura = largura;
    }
  
    setAltura(altura: number) {
      this.altura = altura;
    }
  
    area(): number {
      return this.largura * this.altura;
    }
  }
  
  class Quadrado extends Forma {
    constructor(private lado: number) {
      super();
    }
  
    setLargura(largura: number) {
      this.lado = largura;
    }
  
    setAltura(altura: number) {
      this.lado = altura;
    }
  
    area(): number {
      return this.lado * this.lado;
    }
  }
  
  // Criando um quadrado e tentando usá-lo como retângulo
  const quadrado = new Quadrado(5);
  const retangulo: Forma = quadrado;
  
  // Alterando a largura do "retângulo"
  retangulo.setLargura(10); // Utilizando o método genérico da classe Forma
  console.log(quadrado.area()); // Saída corrigida: 100, que é a área de um quadrado com lado 10