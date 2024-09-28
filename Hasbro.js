let red;
let green;
let blue;
let yellow;
let axu;
let colores = [red, green, blue, yellow];
let values = [(255,0,0),(0,255,0),(0,0,255),(255,255,0)];
let arr = [];
let def = [];
function setup() {
    createCanvas(600, 600);
    let iniciar = createButton('comenzar');
    iniciar.position(150, 350);
    red = createSprite(0, 0, 300, 300);
    red.shapeColor = color(200, 0, 0);
    red.onMousePressed = function () {
        redReact()
    }
    red.onMouseReleased = function () {
        this.shapeColor = color(200, 0, 0);
    }

    green = createSprite(235, 0, 150, 300);
    green.shapeColor = color(0, 200, 0);
    green.onMousePressed = function () {
        greenReact()
    }
    green.onMouseReleased = function () {
        this.shapeColor = color(0, 200, 0);
    }

    createCanvas(600, 600);
    blue = createSprite(0, 235, 300, 150);
    blue.shapeColor = color(0, 0, 200);
    blue.onMousePressed = function () {
        blueReact()
    }
    blue.onMouseReleased = function () {
        this.shapeColor = color(0, 0, 200);
    }

    createCanvas(600, 600);
    yellow = createSprite(235, 235, 150, 150);
    yellow.shapeColor = color(200, 200, 0);
    yellow.onMousePressed = function () {
        yellowReact()
    }
    yellow.onMouseReleased = function () {
        this.shapeColor = color(200, 200, 0);
    }
    iniciar.mousePressed(pasos);
}
function draw() {
    background(0);
    drawSprites();

}

function redReact() {
    red.shapeColor = color(255, 0, 0);
    aux = 1;
    arr.push(aux);
    console.log(arr);
    pasos();

}
function greenReact() {
    green.shapeColor = color(0, 255, 0);
    aux = 2;
    arr.push(aux);
    console.log(arr);
    pasos();
}

function blueReact() {
    blue.shapeColor = color(0, 0, 255);
    aux = 3;
    arr.push(aux);
    console.log(arr);
    pasos();
}
function yellowReact() {
    yellow.shapeColor = color(255, 255, 0);
    aux = 4;
    arr.push(aux);
    console.log(arr);
    pasos();
}

function pasos() {
    let num = floor(random(1, 5))
    def.push(num);
    console.log(def);
verif()
}

function verif() {
    let comparacion = false
    for (let i = 0, z = -1; i < def.length, z < def.length; i++, z++) {
        if (arr[i+z] === def[i+z]) {
            arr = [];
        }
    }
}