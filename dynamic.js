class espada{
    constructor (tamaño, material, attackPoints){
        this.tamaño = tamaño+"m";
        this.attackPoints = attackPoints;
        this.material = material;
        this.durabilidad = 100;
    }

    get atack(){
        return this.calAtack();
    }

    calAtack(){
        return this.attackPoints;
    }
};

class bigEspada{
    constructor (tamaño, material1, material2, attackPoints){
      this.color = "#00ff99";
      this.attackPoints = attackPoints+" Attacks points";
      this.tamaño = tamaño+"m";
      this.material = [material1, material2];
      this.durabilidad = 100;
   }
}

class enemy{
    constructor (vida){
        this.vida = vida;
    }
    
    handleAtack(atack){
        return this.vida = this.vida-atack;
    }

}


const espadaPiedra = new espada(0.5, "Piedra", 61);

const espadaSamurai = new bigEspada(1, "Acero", "Oro", 80);

const skeletor = new enemy(300);

console.log("Creación de la gran espada de piedra");
console.log(espadaPiedra);

console.log("Creación de la legendaria espada samurai");
console.log(espadaSamurai);

console.log("Examinando los puntos de daño de la espada piedra");
console.log(espadaPiedra.atack);

console.log("Comenzando ataque al skeletor!!");
let atack = espadaPiedra.atack;
console.log("Atacar a skeleto*: "+espadaPiedra.atack+"!");
console.log("Daño critico, vida restante: "+skeletor.handleAtack(atack));

console.log("Atacar a skeleto*: "+espadaPiedra.atack+"!");
console.log("Daño critico, vida restante: "+skeletor.handleAtack(atack));

console.log("Atacar a skeleto*: "+espadaPiedra.atack+"!");
console.log("Daño critico, vida restante: "+skeletor.handleAtack(atack));
