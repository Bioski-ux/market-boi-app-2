document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const market = document.getElementById("market").value;
  const items = document.getElementById("items").value;
  const budget = document.getElementById("budget").value;

  alert(
    `Order Received 🚀\n\nMarket: ${market}\nItems: ${items}\nBudget: ₦${budget}`
  );
});
