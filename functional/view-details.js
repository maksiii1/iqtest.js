function show_hide_sidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.classList.toggle("open");
  }
}

function show_hide_details() {
  const details = document.querySelector(".container__details");
  if (details) {
    details.classList.toggle("open");
  }
}

function goToHomePage() {
  document.querySelector("#testContainer").style.display = "none";
  document.querySelector(".main").style.display = "block";

  currentQuestionIndex = 0;
  selectedAnswer = "";

  document.getElementById("nextButton").disabled = true;
  document.getElementById("questionContent").innerHTML = "";
}
