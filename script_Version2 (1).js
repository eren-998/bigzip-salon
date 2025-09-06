document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("booking-success").style.display = "block";
  document.getElementById("booking-success").innerText = "Thank you! Your appointment has been booked.";
  setTimeout(() => {
    document.getElementById("booking-success").style.display = "none";
  }, 4000);
  // Optionally, send booking data to your backend/server here.
});