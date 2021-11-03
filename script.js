const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieName = document.getElementById("movie-names");

let ticketPrice = +movieName.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

movieName.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});
