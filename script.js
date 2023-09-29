let isDarkMode = false;

function darkmode() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    if (isDarkMode) {
        document.getElementById("dark").innerHTML = "dark mode";
    } else {
    document.getElementById("dark").innerHTML = "light mode";
    }

    isDarkMode = !isDarkMode;
}


    const time = new Date();
    document.getElementById('timep').innerHTML = time.getTime()