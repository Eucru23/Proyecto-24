class Piedra {
    constructor(x, y, height, width) {
      var options = {
        'density':12,
        'friction': 0.9,
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
      fill('gray')
      rectMode(CENTER)
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    };
  };
  