let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose,skeleton;
let actor_img;
let specs,smoke;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',recievedPoses);

    actor_img = loadImage("images/shahrukh.png");
    specs_img = loadImage("images/spects.png");
    cigar_img = loadImage("images/cigar.png");


}

function recievedPoses(poses) {
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;

    
        // noseX = singlePose.nose.x;
        // noseY = singlePose.nose.y;

        // reyeX = singlePose.rightEye.x;
        // reyeY = singlePose.rightEye.y;

        // leyeX = singlePose.leftEye.x;
        // leyeY = singlePose.leftEye.y;
    }

    console.log(noseX + "  " + noseY);
}

function modelLoaded() {
    console.log("Model has Loaded");
}

function draw()  {

    // images and videos(webcam)
    image(capture, 0, 0, 650, 500);
    fill(255,0,0);
    // ellipse(noseX, noseY, 30);
    // ellipse(leyeX,leyeY,30);
    // ellipse(reyeX,reyeY,30);

    if(singlePose){

        for (let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x ,singlePose.keypoints[i].position.y,20);
        }


        stroke(255,255,255);
        strokeWeight(5);
        for (let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x,skeleton[j][0].position.y, skeleton[j][1].position.x,skeleton[j][1].position.y);
        }

        image(specs_img,singlePose.nose.x-45,singlePose.nose.y-60,100,100);
        image(cigar_img,singlePose.nose.x-45,singlePose.nose.y+10,40,40);

    }
}