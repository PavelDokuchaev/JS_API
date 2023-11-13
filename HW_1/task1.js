const text = document.querySelector(".orientation");
screen.orientation.addEventListener("change", () => {
  if (
    screen.orientation.type === "portrait-primary" ||
    screen.orientation.type === "portrait-secondary"
  ) {
    text.textContent =
      "Oриентация экрана сменилась с ландшафтной на портретную.";
  } else {
    text.textContent =
      "Oриентация экрана сменилась с портретной на ландшафтную.";
  }
});
