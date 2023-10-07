enum TipoInvestimento {
    RENDA_FIXA,
    RENDA_VARIAVEL
  }
  
  enum TipoTransacao {
    CREDITO,
    DEBITO
  }
  
  class ContaCorrente {
    private numero: string;
    private saldo: number;
    private transacoes: Transacao[];
  
    constructor(numero: string, saldo: number) {
      this.numero = numero;
      this.saldo = saldo;
      this.transacoes = [];
    }
  
    public getNumero(): string {
      return this.numero;
    }
  
    public getSaldo(): number {
      return this.saldo;
    }
  
    public adicionarTransacao(transacao: Transacao): void {
      this.transacoes.push(transacao);
    }
  
    public obterTransacoes(): Transacao[] {
      return this.transacoes;
    }
  }
  
  class Investimento {
    private id: number;
    private valor: number;
    private tipo: TipoInvestimento;
    private statusRisco: string;
  
    constructor(id: number, valor: number, tipo: TipoInvestimento) {
      this.id = id;
      this.valor = valor;
      this.tipo = tipo;
      this.statusRisco = '';
    }
  
    public getId(): number {
      return this.id;
    }
  
    public getValor(): number {
      return this.valor;
    }
  
    public getTipo(): TipoInvestimento {
      return this.tipo;
    }
  
    public setStatusRisco(status: string): void {
      this.statusRisco = status;
    }
  }
  
  class Transacao {
    private id: number;
    private valor: number;
    private tipo: TipoTransacao;
  
    constructor(id: number, valor: number, tipo: TipoTransacao) {
      this.id = id;
      this.valor = valor;
      this.tipo = tipo;
    }
  
    public getId(): number {
      return this.id;
    }
  
    public getValor(): number {
      return this.valor;
    }
  
    public getTipo(): TipoTransacao {
      return this.tipo;
    }
  }
  
  class ContaCorrenteService {
    public static filtrarTransacoesInvalidas(conta: ContaCorrente): Transacao[] {
      const transacoesInvalidas: Transacao[] = [];
      for (const transacao of conta.obterTransacoes()) {
        if (transacao.getTipo() === TipoTransacao.DEBITO && transacao.getValor() < 0) {
          transacoesInvalidas.push(transacao);
        }
      }
      return transacoesInvalidas;
    }
  }

  class InvestimentoService {
    public static avaliarRisco(investimento: Investimento): string {
      if (investimento.getTipo() === TipoInvestimento.RENDA_VARIAVEL) {
        investimento.setStatusRisco('Alto Risco');
      } else {
        investimento.setStatusRisco('Baixo Risco');
      }
      return investimento.getId() + ' - Risco Avaliado: ' + investimento.getStatusRisco();
    }
  }
  
  class TransacaoService {
    public static verificarFraude(transacao: Transacao): boolean {
      if (transacao.getTipo() === TipoTransacao.DEBITO && transacao.getValor() > 10000) {
        return true;
      }
      return false;
    }
  
  // Exemplo de uso
  const conta = new ContaCorrente('12345', 1000);
  const transacao = new Transacao(1, -200, TipoTransacao.DEBITO);
  conta.adicionarTransacao(transacao);
  
  const transacoesInvalidas = ContaCorrenteService.filtrarTransacoesInvalidas(conta);
  console.log('Transações Inválidas:', transacoesInvalidas);
  
  const investimento = new Investimento(1, 5000, TipoInvestimento.RENDA_VARIAVEL);
  console.log(InvestimentoService.avaliarRisco(investimento));
  
  const transacaoFraudulenta = new Transacao(2, 15000, TipoTransacao.DEBITO);
  const isFraudulenta = TransacaoService.verificarFraude(transacaoFraudulenta);
  console.log('Transação Fraudulenta?', isFraudulenta);