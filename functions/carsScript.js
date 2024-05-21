const searchForm = document.getElementById("search-form");
const carList = document.getElementById("car-list");

//Array of objects of cars
const cars = [
  {
    name: "Mercedes SL",
    price: "$50/day",
    image: "mercedes_sl.jpg",
    description: "A luxurious convertible.",
  },
  {
    name: "Lamborghini Urus",
    price: "$65/day",
    image: "lamborghini_urus.jpg",
    description: "A high-performance SUV.",
  },
  {
    name: "Porche 991 Turbo",
    price: "$78/day",
    image: "proche_911.jpg",
    description: "A fast and stylish car.",
  },
  {
    name: "Audi R8",
    price: "$100/day",
    image: "audi_r8.png",
    description: "A sleek and powerful sports car.",
  },
  {
    name: "Honda Civic",
    price: "$38/day",
    image: "honda_civic.jpeg",
    description: "A reliable and economical car.",
  },
  {
    name: "Toyota Land Cruiser",
    price: "$68/day",
    image: "toyota_lc1.jpeg",
    description: "A rugged and spacious SUV.",
  },
  {
    name: "Ford Mustang",
    price: "$75/day",
    image: "ford_mustang1.jpeg",
    description: "An iconic American muscle car.",
  },
  {
    name: "Audi A4",
    price: "$40/day",
    image: "audi_a4.jpeg",
    description: "A comfortable and stylish sedan.",
  },
  {
    name: "BMW X5",
    price: "$55/day",
    image: "bmw_x5.jpg",
    description: "A versatile and luxurious SUV.",
  },
];

//display and map the cars
function displayCars(cars) {
  carList.innerHTML = "";
  if (cars.length === 0) {
    const notFoundMessage = document.createElement("div");
    notFoundMessage.textContent = "No cars found.";
    carList.appendChild(notFoundMessage);
  } else {
    cars.forEach((car) => {
      const carItem = document.createElement("div");
      carItem.classList.add("car");
      carItem.innerHTML = `
        <img src="assets/${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p>${car.price}</p>
      `;
      carItem.addEventListener("click", () => {
        localStorage.setItem("selectedCar", JSON.stringify(car));
        window.location.href = "car-details.html";
      });
      carList.appendChild(carItem);
    });
  }
}

//search function
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchTerm = this.querySelector("input").value.toLowerCase();
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm)
  );
  displayCars(filteredCars);
});

displayCars(cars);
