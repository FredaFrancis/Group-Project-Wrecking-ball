class Ball{      
    constructor(x,y,r){

var options={
    restitution: 1,
    friction: 0,
    frictionAir: 0.0,
    slop: 1,
    inertia: Infinity
}
this.x=x;
		this.y=y;
		this.r=r
this.body=Bodies.circle(x,y,r/2,options)
World.add(world,this.body)

    }


    
display(){
var pos=this.body.position;
rectMode(CENTER)
ellipse(this.x,this.y,this.r, this.r);

}
    }