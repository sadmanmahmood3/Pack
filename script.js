const btn = document.getElementById("theme-btn");   // find the button by its id

btn.addEventListener("click", function () {         // run this code when the button is clicked
    document.body.classList.toggle("dark");          // add class "dark" to <body>, or remove it if already there

    if (document.body.classList.contains("dark")) {  // if dark mode is now on
        btn.textContent = "☀️";                       // show the sun icon
    } else {                                         // otherwise
        btn.textContent = "🌙";                       // show the moon icon
    }
});