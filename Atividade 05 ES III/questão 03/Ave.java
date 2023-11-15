package questao03;
//Parece ser uma herança conveniente, porém pode deixar impressão de estar sendo mal aplicada.

abstract class Ave {
    public abstract void eat();
}

class Galinha extends Ave{
    @Override
    public void eat(){

    }
}

class Pinguim extends Ave{
    @Override
    public void eat(){

    }
}