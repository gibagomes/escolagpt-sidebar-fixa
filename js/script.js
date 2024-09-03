// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var btn = document.getElementById("openModalBtn");

// Get close button
var span = document.getElementsByClassName("close")[0];

// Open modal when button is clicked
btn.onclick = function () {
  modal.style.display = "block";
};

// Close modal when 'x' is clicked
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside of modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
