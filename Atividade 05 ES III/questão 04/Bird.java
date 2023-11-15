package questao04;
// É uma forma conveniente de ser utilizado, porém deixa futuras expansões comprometidas ou com problemas de design, 
// pois o código depende fortemente da verificação do tipo isFlightless() para o tratamento dos pássaro, ele só verifica se a ave voa ou não.

abstract class Bird {
    public abstract void setLocation(double longitude, double latitude);
    public abstract void setAltitude(double altitude);
    public abstract void draw();
    
    public abstract boolean isFlightless(); 


void ArrangeBirdInPattern(Bird aBird) {
    if (aBird.isFlightless()) {
        ArrangeBirdOnGround(aBird);
    } else {
        ArrangeBirdInSky(aBird);
    }
}

void ArrangeBirdOnGround(Bird bird) {
    //
}

void ArrangeBirdInSky(Bird bird) {
    // 
}
}