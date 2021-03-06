class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,10,20,options);
        this.image = loadImage("walking_1.png")
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,600,600);
    }
}