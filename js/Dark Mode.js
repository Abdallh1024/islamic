// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

// تحقق من تفضيلات المستخدم المخزنة في localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "وضع النهار";
} else {
    darkModeToggle.textContent = "وضع الليل";
}

// حدث تغيير الوضع
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        darkModeToggle.textContent = "وضع النهار";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        darkModeToggle.textContent = "وضع الليل";
    }
});