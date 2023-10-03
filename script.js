let isDarkMode = false;

function darkmode() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    if (isDarkMode) {
        document.getElementById("dark").innerHTML = "dark_mode";
    } else {
        document.getElementById("dark").innerHTML = "light_mode";
    }
    isDarkMode = !isDarkMode;
}

let timeofday = new Date();

hours = timeofday.getHours()

if (hours >= 0 && hours < 12) {
    console.log('Good Morning')
    document.getElementById('greeting').innerHTML = `Good Morning, Welcome to my Site.`
} else if (hours >= 12 && hours <= 16) {
    document.getElementById('greeting').innerHTML = `Good Afternoon, Welcome to my Site.`
    console.log('Good Afternoon')
} else {
    document.getElementById('greeting').innerHTML = `Good Evening, Welcome to my Site.`
    console.log('Good Evening')
}
