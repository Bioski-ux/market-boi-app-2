document.addEventListener("DOMContentLoaded", function () {
  

  const form = document.getElementById("orderForm");
const confirmation = document.getElementById("confirmation")

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    confirmation.textContent =
    alert("✅ Order submitted successfully. A market agent will contact you shortly.")

    form.reset();
  });
});
