document.addEventListener("DOMContentLoaded", function () {
  

  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Order Received 🚀");
  });
});
