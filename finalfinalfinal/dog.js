class Dog {
  constructor() {
    this.img = imgDog;
    this.r = 60;
    this.X = w / 2;
    this.y = h - this.r;
    this.vy = 0;
    this.gravity = 0.6;
    this.speed = 2;
  }

  display() {
    image(this.img, this.x, this.y + 2, this.w, this.h);
  }

  jump(){
  if(this.y ==height-this.h){
     this.vy= -18;            
    }
  }

  hits(block) {
    return collideRectRect(this.x, this.y, this.r, this.r, block.x, block.y, block.w, block.h);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, h - this.r);
  }
}
