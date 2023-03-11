/* function modalOpen() {
addEventListener("click", (e) => {
  console.log(e.target.id)
  if (e.target.id === "modal") {
    e.target.style.visibility = 'hidden';
  } else if (e.target.id === "modal-open") {
    modalOpen();
  } else if (e.target.id === "modal-close") {
    e.target.parentElement.parentElement.style.visibility = 'hidden';
  }
});
} */

document.getElementById('openModal').addEventListener('click', function() {
  document.getElementById('modal').style.display = "block";
});