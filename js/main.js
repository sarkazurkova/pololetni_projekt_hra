let rabbit;


class Rabbit {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 80;
        this.color = 'yellow';
        this.v = 5;
    }

    move() {
        if (keyIsDown(65)) {
            if (this.x > this.w / 2) this.x -= this.v;
        }
        if(keyIsDown(68)) {
            if (this.x < 500 - this.w / 2) this.x += this.v;
        }
    }

    draw(){
        this.move();
        rect(this.x, this.y, this.w, this.h);
        fill(this.color);
        rectMode(CENTER);
        push();
        pop();
    }
}


function setup() {
    canvas = createCanvas(500, 500);
    rabbit = new Rabbit(0, 490);
}

function draw() {
    background(0);
    rabbit.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
