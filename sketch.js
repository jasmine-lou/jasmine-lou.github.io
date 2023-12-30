// setup() is called once at page-load
let last_min = -1;

function setup() {
    createCanvas(800, 600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    
    background(250, 233, 218);

    translate(width / 2, height / 2);

    let hr = hour();
    let min = minute();
    let sec = second();

    if (min !== last_min) {
        console.log(min);
        last_min = min;
    }

    let hr_d = 100;
    let min_d = 150;
    let sec_d = 200;

    stroke('#60485C');
    strokeWeight(2);
    fill(239, 181, 229, 75);
    circle(0, 0, 2*sqrt(sec_d*sec_d));

    stroke('#A77FA0');
    strokeWeight(2);
    fill(239, 181, 229, 75);
    circle(0, 0, 2*sqrt(min_d*min_d));

    stroke('#D7A3CE');
    strokeWeight(2);
    fill(239, 181, 229, 75);
    circle(0, 0, 2*sqrt(hr_d*hr_d));

    // stroke('#EFB5E5')
    // line(0, 0, 0, -sec_d)
    
    stroke('#D7A3CE');
    strokeWeight(4);
    fill('#EFB5E5');
    circle(hr_d * cos(map((hr-3) % 12, 0, 12, 0, TWO_PI)), hr_d * sin(map((hr-3) % 12, 0, 12, 0, TWO_PI)), 40);

    stroke('#A77FA0');
    strokeWeight(4);
    fill('#BF91B7');
    circle(min_d * cos(map((min-15) % 60, 0, 60, 0, TWO_PI)), min_d * sin(map((min-15) % 60, 0, 60, 0, TWO_PI)), 25);

    stroke('#60485C');
    strokeWeight(4);
    fill('#785B73');
    circle(sec_d * cos(map((sec-15) % 60, 0, 60, 0, TWO_PI)), sec_d * sin(map((sec-15) % 60, 0, 60, 0, TWO_PI)), 15);
}
