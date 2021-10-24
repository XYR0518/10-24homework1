let numX=6;
let numY=6;
let bs=[];
function setup() {
  createCanvas(700, 700);
  for(let i=0;i<numX;i=i+1){
  for(let j=0;j<numY;j=j+1){
  bs.push(new Ball(i*width/numX+width/numX/2,
                   j*height/numY+height/numY/2))
  }
  }
}

function draw() {
  background(255,235,205);
  bs.forEach((v)=>{
    v.display();
  });
}

class Ball{
  constructor(x,y,w=20,h=20){

    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h
    this.movex =random(-1.0,1.0);
    this.movey =random(-1.0,1.0);
  }
  display(){
    this.selfbounce();
    this.bounce();
    this.move();
    rect(this.x,this.y,this.w,this.h);
  }
  move(){
    this.x = this.x + this.movex;
    this.y = this.y + this.movey;
  }
  bounce(){
    if (this.y-this.h/2<0){
      this.movey = -1*this.movey;
    }
    if (this.y+this.h/2>height){
      this.movey = -1*this.movey;
    }
    if (this.x-this.w/2<0){
      this.movex = -1*this.movex;
    }
    if (this.x+this.w/2>width){
      this.movex = -1*this.movex;
    }
  }
  selfbounce(){
    bs.forEach((nb)=>{
      if (nb === this){
        console.log('a');
      }else{
        if (abs(this.x-nb.x)<this.w && 
            dist(this.x,this.y,nb.x,nb.y)<this.w)
          {this.movex=-1*this.movex;
           }
        if (abs(this.y-nb.y)<this.h && 
            dist(this.x,this.y,nb.x,nb.y)<this.h)
          {this.movey=-1*this.movey;
           }
      }
      
      });
  }
}