//car game logic

const car = document.querySelector(".car");
const road = document.querySelector(".road");
const scoreElement = document.querySelector(".score");

let carPosition = 125; // Initial position of the car
const carSpeed = 20;
const obstacleSpeed = 10;
let score = 0;
let obstacles = [];
let moveObstaclesInterval;
let spawnObstacleInterval;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && carPosition > 0) {
    carPosition -= carSpeed;
    car.style.left = `${carPosition}px`;
  } else if (event.key === "ArrowRight" && carPosition < 250) {
    carPosition += carSpeed;
    car.style.left = `${carPosition}px`;
  }
});

function moveObstacles() {
  obstacles.forEach((obstacle, index) => {
    let obstaclePosition = parseInt(obstacle.style.top);
    obstaclePosition += obstacleSpeed;
    obstacle.style.top = `${obstaclePosition}px`;

    // Reset obstacle position after it goes off screen
    if (obstaclePosition > 1000) {
      road.removeChild(obstacle);
      obstacles.splice(index, 1);
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }

    // Check for collision
    const carRect = car.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    if (
      carRect.left < obstacleRect.left + obstacleRect.width &&
      carRect.left + carRect.width > obstacleRect.left &&
      carRect.top < obstacleRect.top + obstacleRect.height &&
      carRect.height + carRect.top > obstacleRect.top
    ) {
      alert("Game Over! Final Score: " + score);
      resetGame();
    }
  });
}

function spawnObstacle() {
  if (obstacles.length < 3) {
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    obstacle.style.top = "-100px";
    obstacle.style.left = `${Math.floor(Math.random() * 3) * 100}px`;
    road.appendChild(obstacle);
    obstacles.push(obstacle);
  }
}

function startGame() {
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  carPosition = 125;
  car.style.left = `${carPosition}px`;
  obstacles.forEach((obstacle) => road.removeChild(obstacle));
  obstacles = [];
  clearInterval(moveObstaclesInterval);
  clearInterval(spawnObstacleInterval);
  moveObstaclesInterval = setInterval(moveObstacles, 30);
  spawnObstacleInterval = setInterval(
    spawnObstacle,
    Math.random() * 1000 + 1000
  ); // Random delay between 1 and 2 seconds
}

function resetGame() {
  clearInterval(moveObstaclesInterval);
  clearInterval(spawnObstacleInterval);
  startGame();
}

// Start the game initially
startGame();
