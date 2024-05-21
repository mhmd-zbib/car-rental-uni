/**
 * This script takes the data of the selected car from the website's local storage and displays it on the page.
 */

document.addEventListener("DOMContentLoaded", () => {
  const car = JSON.parse(localStorage.getItem("selectedCar"));
  if (car) {
    document.getElementById("car-name").textContent = car.name;
    document.getElementById("car-image").src = `assets/${car.image}`;
    document.getElementById("car-image").alt = car.name;
    document.getElementById("car-price").textContent = car.price;
    document.getElementById("car-description").textContent = car.description;
  } else {
    document.getElementById("car-details").innerHTML =
      "<p>No car details available.</p>";
  }
});
