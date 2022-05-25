Status = "";
input_text = "";

function setup(){
    canvas = createCanvas(480,380);
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide();
    canvas.center();
}
function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input_id").value;
}
function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}
function draw(){
    image(video,0,0,480,380);
}