class Hierro {
    constructor(x, y, width, height) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
  
      push();
      strokeWeight(3);
      stroke('white')
      fill('black')
      rectMode(CENTER)
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    };
  };
  