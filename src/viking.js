// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength; 
    }
     
     attack(){
      //console.log(this.strength);
      return this.strength;
    }

    receiveDamage(damage)
    {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health ,strength) {
        super(health,strength);
        this.name=name;
        this.health=health;
        this.strength=strength;
       }
       attack()
       {
        return this.strength;
      }

      receiveDamage(damage)
      { 
        this.health = this.health - damage;
        if(this.health === 0){
            return `${this.name} has died in act of combat`;
            
        }else{
            return `${this.name} has received ${damage} points of damage`;
        }

      }
      battleCry(){
        return "Odin Owns You All!";
      }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health = this.health - damage;
      if(this.health > 0){
     //   console.log("&&&&&"+ damage)
        return `A Saxon has received ${damage} points of damage`;
      }else{
        return `A Saxon has died in combat`;
      }
    }


}

// War
class War{
    constructor(){
      this.vikingArmy=[];
      this.saxonArmy=[];
    }
    addViking(Viking){
      this.vikingArmy.push(Viking);
      this.vikingArmy.push(Viking);
      this.vikingArmy.push(Viking);
      this.vikingArmy.push(Viking);
      this.vikingArmy.push(Viking);
      this.vikingArmy.push(Viking);
      this.vikingArmy.push(Viking);
      this.vikingArmy.push(Viking);
      this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
      this.saxonArmy.push(Saxon);
      this.saxonArmy.push(Saxon);
      this.saxonArmy.push(Saxon);
      this.saxonArmy.push(Saxon);
      this.saxonArmy.push(Saxon);
      this.saxonArmy.push(Saxon);
      this.saxonArmy.push(Saxon);
      this.saxonArmy.push(Saxon);
      this.saxonArmy.push(Saxon);

     
  }
  vikingAttack() {
  

    
      
      let saxon =Math.floor(Math.random()*this.saxonArmy.length);
      let viking =Math.floor(Math.random()*this.vikingArmy.length);
      
      
      this.saxonArmy[saxon].receiveDamage()= this.vikingArmy[viking].strength ;
     
   return this.vikingArmy[viking].strength;
  }
  saxonAttack(){

  }
   
    
}
