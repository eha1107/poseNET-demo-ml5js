/*alert("Hello world");*/

//let shahrukh_img;

let capture;

function setup(){    //code inside setup function- runs only once
    createCanvas(800,500);
    //console.log('Setup function');

//    shahrukh_img = loadImage("images/shahrukh.png");

capture = createCapture(VIDEO);
capture.hide();

}

// function getRandomArbitrary(min,max){
//     return Math.random() * (max - min) + min;
// }

function draw() {     // wherese code inside dra function- runs in infinite loop

    //images and videos(webcam)
    //image(shahrukh_img,100,100,100,100);
    //image(shahrukh_img,mouseX, mouseY, 100,100);

    image(capture, 0, 0, 800, 600);


    //console.log('Draw function');

    // r = getRandomArbitrary(0,255);
    // g = getRandomArbitrary(0,255);
    // b = getRandomArbitrary(0,255);
    // fill(r,g,b);

    //fill(255);
    //ellipse(mouseX, mouseY, 50, 50);

    //background(200);
    // 1. Point
       //point(200,200);
    // 2. line
      //line(200,200,300,300);
    // 3. triangle
       //triangle(100,200,300,400,150,450);
    // 4. rectangle
       //rect(500,200,100,100);
    // 5. circle
       //ellipse(600,300,100,100);

       //stroke-outline, and color
    //    fill(132,100,34,200)
    //    stroke(355,0,0);
    //    strokeWeight(5);
    //    ellipse(100,200,100,100);
    //    stroke(0,355,0);
    //    ellipse(250,200,100,100);
    //    ellipse(400,200,100,100);
    //    stroke(0,0,350);
    //    ellipse(550,200,100,100);
    //    ellipse(700,200,100,100);

}