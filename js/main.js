let cat;
let score = document.getElementById("skore");
let can = [];
let frame = 0;
let points = 0;
let lives = 10;
let speed = 60;
let catImage, canImage;


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
        push();    
        rect(this.x, this.y, this.w, this.h);
        //fill(this.color);
        rectMode(CENTER);
        image(catImage, this.x -30, this.y - 30, 100, 100 );
        pop();
    }
}

class Can {
    constructor(angle) {
        this.y = -100;
        this.size = random(20, 40);
        this.x = random(10, width - this.size);
        this.angle = angle;
        
        this.v = 2;
        this.angle = random(0, 359);
    }

    move() {
        this.y += this.v;
    }

    

    draw() {
        this.move();
        
        push();
        //stroke(255);
        //dfill('red');
        
        imageMode(CENTER);
        
        
        circle(this.x+this.size/2, this.y+this.size/2, this.size);
        
       image(canImage, this.x+ this.size /2 , this.y + this.size /2, this.size*3, this.size*3 );
       
        pop();
    }
}

function preload() {
    catImage = loadImage("img/cat2.png");
    canImage = loadImage("img/can.png");
}

function setup() {
    canvas = createCanvas(500, 500);
    cat = new Cat(0, height-50);
    
}

function draw() {
    frame++;
    
    background(209,237,242);
    cat.draw();
    if(frame % speed == 0){
        can.push(new Can());
        }
    
    
    can.forEach(function(c, idx, arr){

        c.draw();
        if(c.y > height ) {
            arr.splice(idx, 1);
            lives --;
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
    console.log(lives);
    console.log(speed);
    
    
    if(lives == 0) {
        background(0);
        noLoop();
         /* Nastavení tmavě červeného pozadí s průhledností (200) */
            background(100, 0, 0, 200);
            textSize(50);
            fill(255, 0, 0, 200);
            text('GAME OVER :(', width/2 -200, height/2);
        
        
        
    }
    score.innerHTML = `<p>Skóre: ${points}</p>`;
    score.innerHTML += `<p>Životy: ${lives}</p>`;
} 



