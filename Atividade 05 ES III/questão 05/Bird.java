package questão05;

// Sim a composição poderia ser aplicada. Essa correção garante que classses de pássaros sem voo não herdem funcionalidade de voo de suas supercclasses.

abstract class Bird {
    public abstract void draw();
    public abstract void setLocation(double longitude, double latitude);
}

class FlightfulBird extends Bird {
    private FlightfulBehavior flightfulBehavior;

    public FlightfulBird(FlightfulBehavior flightfulBehavior){
        this.flightfulBehavior = flightfulBehavior;
    }
    @Override
    public void draw() {
        // 
    }

    @Override
    public void setLocation(double longitude, double latitude) {
        // 
    }
    
    public void setAltitude(double altitude) {
        // 
    }
    public void fly(){
        flightfulBehavior.fly();
    }
}
