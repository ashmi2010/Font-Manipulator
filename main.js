leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(590, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
    textSize(difference);
    fill('#f2a324');
    text("Music", 50, 200);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + " rightWristX = "+ rightWristX + "difference = " + difference);
    }
}