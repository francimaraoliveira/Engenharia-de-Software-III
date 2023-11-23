class Conta {
    private saldo: number;
    private numeroConta: string;
  
    constructor(numeroConta: string, saldoInicial: number) {
      this.numeroConta = numeroConta;
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      if (valor > this.saldo) {
        throw new Error("Saldo insuficiente.");
      }
      this.saldo -= valor;
    }
  
    consultarSaldo(): number {
      return this.saldo;
    }
  
    // Outros métodos relevantes...
  }
  
  class ContaCliente {
    private conta: Conta;
    private nome: string;
    private cpf: string;
    private endereco: string;
  
    constructor(
      numeroConta: string,
      saldoInicial: number,
      nome: string,
      cpf: string,
      endereco: string
    ) {
      this.conta = new Conta(numeroConta, saldoInicial);
      this.nome = nome;
      this.cpf = cpf;
      this.endereco = endereco;
    }
  
    depositar(valor: number): void {
      this.conta.depositar(valor);
    }
  
    sacar(valor: number): void {
      this.conta.sacar(valor);
    }
  
    consultarSaldo(): number {
      return this.conta.consultarSaldo();
    }
  
    // Métodos específicos do cliente
    alterarEndereco(novoEndereco: string): void {
      this.endereco = novoEndereco;
    }
  
    exibirInformacoesCliente(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`CPF: ${this.cpf}`);
      console.log(`Endereço: ${this.endereco}`);
      console.log(`Número da Conta: ${this.conta}`);
      console.log(`Saldo: ${this.consultarSaldo()}`);
      
    }
  }
  const contaCliente = new ContaCliente('12345', 1000, 'Roberto da Silva', '123.456.789-00', 'Rua Fernando Pessoa, 875');
  console.log(contaCliente); 
  
  contaCliente.depositar(500);
  console.log(contaCliente.consultarSaldo()); 
  
  contaCliente.sacar(200);
  console.log(contaCliente.consultarSaldo()); 
  
  contaCliente.alterarEndereco('Rua Machado de Assis, 123');
  contaCliente.exibirInformacoesCliente();