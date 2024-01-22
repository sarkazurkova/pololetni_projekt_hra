let cat;
let can = [];
let frame = 0;
let points = 0

class Cat {
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
        //push();    
        rect(this.x, this.y, this.w, this.h);
        fill(this.color);
        rectMode(CENTER);
        //pop();
    }
}

class Can {
    constructor(x, y, angle) {
        this.y = -100;
        this.size = random(20, 40);
        this.x = random(0, width - this.size);
        this.angle = angle;
        
        this.v = 3;
        this.angle = random(0, 359);
    }

    move() {
        this.y += this.v;
    }

    draw() {
        this.move();
        push();
        stroke(255);
        fill('red');
        circle(this.x, this.y, this.size);
        pop();
    }
}


function setup() {
    canvas = createCanvas(500, 500);
    cat = new Cat(0, 490);
    
}

function draw() {
    frame++;
    background(0);
    cat.draw();
    if(frame % 60 == 0){
        can.push(new Can());
    }
    
    can.forEach(function(c, idx, arr){

        c.draw();
        if(c.y > height ) {
            arr.splice(idx, 1);
        }
        if(collideRectCircle(
            cat.x,
            cat.y,
            cat.w,
            cat.h,
            c.x,
            c.y, 
            c.size /2
        )) {
            arr.splice(idx, 1);
            points++;
        }
        
    });
    console.log(points);
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
