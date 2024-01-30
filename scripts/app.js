const darkMode = () => {
  const element = document.body;
  element.classList.toggle("dark-mode");

  const button = document.getElementById("button");
  if (element.classList.contains("dark-mode")) {
    button.textContent = "light";
  } else {
    button.textContent = "dark";
  }
};

document.getElementById("button").addEventListener("click", darkMode);

const time = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 0 && hours < 12) {
    document.title = "[TLG] - Good Morning";
  } else if (hours >= 12 && hours < 18) {
    document.title = "[TLG] - Good Afternoon";
  } else {
    document.title = "[TLG] - Good Evening";
    darkMode();
  }
};

document.addEventListener("DOMContentLoaded", time);

document.getElementById("title-tlg").onclick = () => {
  // open a file in files directory
  window.open("../files/tlg.png", "_blank");
};
