function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill('#B8BC86');
    stroke('#B8BC86');
    rect(10,1,1200,20);
    rect(620,10,20,450);
    rect(10,460,1200,20);
    rect(1,10,20,450);
    fill('#C0C0C0');
    stroke('#C0C0C0');
    circle(625,460,50);
    circle(620,10,50);
    circle(10,460,50);
    circle(15,10,50);
}