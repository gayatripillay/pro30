class Ground {

constructor() {

var options = {isStatic: true}

this.ground = Bodies.rectangle(500,550,2600,90,options)
World.add(world, this.ground)
    
}

display() {

noStroke();
fill("brown");
rectMode(CENTER);
rect(this.ground.position.x,this.ground.position.y,1400,20);

}










}