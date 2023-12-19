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

  if (hours >= 6 && hours <= 18) {
    document.title = "[TLG] - Good Morning";
  } else {
    document.title = "[TLG] - Good Evening";
    darkMode();
  }
};

document.addEventListener("DOMContentLoaded", time);
