noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
dif=0;
function setup(){
//video
    video= createCapture(VIDEO);
video.size(550, 500);
video.position(100,150);
//canvas
canvas= createCanvas(550 , 500);
canvas.position(830 , 150);
//instize posenet 
poseNet=ml5.poseNet(video , modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("Model is Loaded!");
}

function gotPoses(results) {
    if (results.length > 0 ) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        dif=floor(leftWristX - rightWristX);
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);
        console.log("x position of left wrist  = " + leftWristX);
        console.log("x position of right wrist = " + rightWristX);
        console.log("square measure = " + dif);
    }

}

function draw(){
    background('royalblue');
    stroke('#FF0000');
    fill('#FF0000');
    square(noseX , noseY , dif);
}

