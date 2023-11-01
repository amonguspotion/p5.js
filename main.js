function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw() {
    image(video, 0, 0, 300, 300)
    circle(15, 15, 30);
    circle(285, 15, 30);
    circle(285, 285, 30);
    circle(15, 285, 30);
    rect(15, 15, 2, 260);
    rect(15, 15, 260, 2);
    rect(285, 15, 2, 260);
    rect(15, 285, 260, 2);
}

function take_snapshot(){
    save('myFramedImage.png')
}