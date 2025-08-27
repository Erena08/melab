document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice");

  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      const userChoice = choice.dataset.choice;
      localStorage.setItem("step1Choice", userChoice);
      window.location.href = "step2.html"; // ページ遷移
    });
  });
});
