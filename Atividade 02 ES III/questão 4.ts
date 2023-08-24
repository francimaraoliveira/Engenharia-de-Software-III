/* 4ª questão */

/*interface ITelefone {
  modeloTelefone: string;
  versaoTelefone: number;
  preco: number
  toque(): string;
}

class TelefoneFixo implements ITelefone {
  constructor(
      public modeloTelefone: string, 
      public versaoTelefone: number,
      public preco: number
    ){}
  toque() {
    return "Trim Trim";
  }
}

class TelefoneCelular implements ITelefone {
    constructor(
        public modeloTelefone: string,
        public versaoTelefone: number,
        public preco: number  
    ){}
    toque() {
        return "Ring Ring!!!";
    }
}

let telefoneFixo = new TelefoneFixo("IntelBras", 78985, 90.00);
let telefoneCelular = new TelefoneCelular("Lumia 520", 89623, 750.00);

var telefones: ITelefone[] = [];
telefones.push(telefoneFixo);
telefones.push(telefoneCelular);

for(var i of telefones) {
    console.log(i.modeloTelefone);
    console.log(i.versaoTelefone);
    console.log(i.preco);
    console.log(i.toque());
    console.log("==================")
}*/

interface ITelefone {
    modeloTelefone: string;
    versaoTelefone: number;
    preco: number;
    toque(): string;
}

class TelefoneFixo implements ITelefone {
    constructor(
        public modeloTelefone: string,
        public versaoTelefone: number,
        public preco: number
    ) {}

    toque() {
        return "Trim Trim";
    }
}

class TelefoneCelular implements ITelefone {
    constructor(
        public modeloTelefone: string,
        public versaoTelefone: number,
        public preco: number
    ) {}

    toque() {
        return "Ring Ring!!!";
    }
}

class LojaTelefones {
    private telefones: ITelefone[] = [];

    adicionarTelefone(telefone: ITelefone): void {
        this.telefones.push(telefone);
    }

    listarTelefones(): void {
        for (var telefone of this.telefones) {
            console.log(telefone.modeloTelefone);
            console.log(telefone.versaoTelefone);
            console.log(telefone.preco);
            console.log(telefone.toque());
            console.log("==================");
        }
    }
}

try {
    let loja = new LojaTelefones();
    let telefoneFixo = new TelefoneFixo("IntelBras", 78985, 90.00);
    let telefoneCelular = new TelefoneCelular("Lumia 520", 89623, 750.00);

    loja.adicionarTelefone(telefoneFixo);
    loja.adicionarTelefone(telefoneCelular);

    loja.listarTelefones();
} catch (error) {
    console.error("Erro:", error);
}