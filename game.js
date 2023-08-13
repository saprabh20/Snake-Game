import { update as updateSnake, draw as drawSnake, Snake_Speed, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js"

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
    if(gameOver){
        if(confirm("You Lost! Press Ok to restart.")){
            // window.location= "/DEV/Jquery/Snake";
            window.location= "https://saprabh20.github.io/Snake-Game/";
        }
        return;
    }
    
    window.requestAnimationFrame(main);

    const secsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secsSinceLastRender < 1 / Snake_Speed) {
        return;
    }

    lastRenderTime = currentTime;

    updateS()
    drawS()
}
window.requestAnimationFrame(main);

function updateS() {
    updateSnake();
    updateFood();
    checkDeath();
}

function drawS() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
