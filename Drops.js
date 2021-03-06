class Drops{
        constructor(x,y){
            var options= {
                restitution:0.4
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.body);
        }
        display(){
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            noStroke();
            fill("light_blue");
            ellipseMode(RADIUS);
            ellipse(0,0,this.radius,this.radius);
            pop();
        }
    }