const directions = ["right", "left", "up", "down", "space"]
const xStart = 300; //starting x coordinate for snake
const yStart = 300; //starting y coordinate for snake
const diff = 30;

let numSegments = 10;
let direction = "right";

let xCor = [];
let yCor = [];

let xFruit = 0;
let yFruit = 0;
let scoreElem;
