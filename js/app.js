document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  const confirmation = document.getElementById("confirmation");
  const agentBox = document.getElementById("agentBox");

  const agents = [
    "Musa (Vegetables – 30 mins)",
    "Aisha (Grains – 45 mins)",
    "Chinedu (General items – 40 mins)",
    "Sadiq (Fruits – 35 mins)"
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

   confirmation.style.display = "block";
confirmation.textContent =
  "✅ Order submitted successfully. A market agent has been assigned.";


    // assign agent safely
    const assignedAgent =
      agents[Math.floor(Math.random() * agents.length)];

    agentBox.textContent = "Assigned Agent: " + assignedAgent;

    form.reset();
  });
});
