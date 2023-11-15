package questão05;

// A composição é mais aplicável, já que as subclasses não tem comportamentos distintos específicos.

class Ave {
    private Alimentacao alimentacao;

    public Ave(Alimentacao alimentacao){
        this.alimentacao = alimentacao;
    }
    public void comer(){
        alimentacao.eat();
    }
}

class Galinha implements Alimentacao{
    @Override
    public void eat(){

    }
}

class Pinguim implements Alimentacao{
    @Override
    public void eat(){

    }
}