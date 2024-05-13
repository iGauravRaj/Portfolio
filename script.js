var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        icon.style.color = "#ffffff"; // Change color to white for sun
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        icon.style.color = "#121212"; // Change color to dark for moon
    }
};