class Rope{
    constructor(body,point){
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.8,
            length: 250,
            angularStiffness: 1
        }
        this.pointB = point;
        this.pointX = body.x;
        this.pointY = body.y - 250;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }



    display(){
      
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    
}
}