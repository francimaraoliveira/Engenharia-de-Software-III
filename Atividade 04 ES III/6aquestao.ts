class AuditoriaFinanceiraService {
    public executar(auditaveis: IAuditavel[]): void {
      for (const auditavel of auditaveis) {
        console.log(`Auditoria para ${auditavel.getTipo()} (ID: ${auditavel.getId()})`);
        this.realizarAuditoria(auditavel);
      }
    }
  
    private realizarAuditoria(auditavel: IAuditavel): void {
      switch (auditavel.getTipo()) {
        case 'Conta Corrente':
          this.auditarContaCorrente(auditavel as ContaCorrente);
          break;
        case 'Investimento':
          this.auditarInvestimento(auditavel as Investimento);
          break;
        case 'Transacao':
          this.auditarTransacao(auditavel as Transacao);
          break;
      }
    }
  
    private auditarContaCorrente(conta: ContaCorrente): void {
      console.log(`Auditoria para Conta Corrente ${conta.getId()}`);
      console.log(`Saldo Atual: ${conta.getSaldo()}`);
      const transacoes = conta.obterTransacoes();
      console.log(`Número de Transações: ${transacoes.length}`);
      console.log('Transações:');
      for (const transacao of transacoes) {
        console.log(`ID: ${transacao.getId()}, Tipo: ${transacao.getTipo()}, Valor: ${transacao.getValor()}`);
      }
      console.log('--- Fim da Auditoria ---');
    }
  
    private auditarInvestimento(investimento: Investimento): void {
      console.log(`Auditoria para Investimento ${investimento.getId()}`);
      console.log(`Tipo de Investimento: ${TipoInvestimento[investimento.getTipo()]}`);
      console.log(`Valor Investido: ${investimento.getValor()}`);
      console.log(`Status de Risco: ${investimento.getStatusRisco()}`);
      console.log('--- Fim da Auditoria ---');
    }
  
    private auditarTransacao(transacao: Transacao): void {
      console.log(`Auditoria para Transação ${transacao.getId()}`);
      console.log(`Tipo de Transação: ${TipoTransacao[transacao.getTipo()]}`);
      console.log(`Valor da Transação: ${transacao.getValor()}`);
      console.log('--- Fim da Auditoria ---');
    }
  }  