class Ball{      
    constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.1,
			friction:0.1,
			density:2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			ellipseMode(RADIUS)
			strokeWeight(3);
			fill("red")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}


    }