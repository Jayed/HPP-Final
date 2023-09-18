const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("myModal");
const closeButton = document.getElementsByClassName("close")[0];

// Add event listener to open the modal
openModalButton.addEventListener("click", function() {
  modal.style.display = "block";
});

// Add event listener to close the modal
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
