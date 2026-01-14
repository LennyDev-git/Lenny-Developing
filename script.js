// Globale Dark/Light Mode Steuerung
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggle = document.getElementById("theme-toggle");

    // Prüfen, ob eine gespeicherte Einstellung vorhanden ist
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }

    // Button Text setzen
    if (toggle) {
        toggle.textContent = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";

        // Klick-Event
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            const isDark = body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            toggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        });
    }
});
