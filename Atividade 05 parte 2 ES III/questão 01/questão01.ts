class ContaBancaria {
    private saldo: number;
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      this.saldo -= valor;
    }
  
    getSaldo(): number {
      return this.saldo;
    }
  }
  
  class ContaPoupanca {
    private contaBancaria: ContaBancaria;
  
    constructor(saldoInicial: number) {
      this.contaBancaria = new ContaBancaria(saldoInicial);
    }
  
    sacar(valor: number): void {
      if (valor > 1000) {
        throw new Error("Não pode sacar mais de 1000 em uma poupança");
      }
      this.contaBancaria.sacar(valor);
    }
  
    depositar(valor: number): void {
      this.contaBancaria.depositar(valor);
    }
  
    getSaldo(): number {
      return this.contaBancaria.getSaldo();
    }
  }
  
  const minhaContaPoupanca = new ContaPoupanca(6000);
  console.log(minhaContaPoupanca.getSaldo()); // Saída: 6000
  minhaContaPoupanca.depositar(2000);
  console.log(minhaContaPoupanca.getSaldo()); // Saída: 8000
  minhaContaPoupanca.sacar(500);
  console.log(minhaContaPoupanca.getSaldo()); // Saída: 7500
  minhaContaPoupanca.sacar(2000); // Isso lançará uma exceção devido ao limite de saque da poupança