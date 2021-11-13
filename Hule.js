class Hule {
	constructor(x, y, radius) {
	  var options = {
		'density':1,
		'friction': 5,
		'restitution':0.3,
		isStatic: false
	  };
	  this.body = Bodies.circle(x,y,radius,options);
	  World.add(world, this.body);
	  this.body.radius = radius;

	};
	display(){ 
	  var pos = this.body.position;

	  push();
	  strokeWeight(3);
	  stroke('white')
	  fill('blue')
	  ellipseMode(RADIUS);
  	  ellipse(pos.x, pos.y, this.body.radius,this.body.radius);
	  pop();
	};
  };
  