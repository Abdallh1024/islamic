// العناصر الرئيسية
const counterElement = document.getElementById("counter");
const countButton = document.getElementById("count-btn");
const resetButton = document.getElementById("reset-btn");

// تحميل العدد المحفوظ من localStorage
let count = localStorage.getItem("tasbeehCount") || 0;
counterElement.textContent = count;

// زيادة العداد عند الضغط على الزر
countButton.addEventListener("click", () => {
    count++;
    counterElement.textContent = count;
    localStorage.setItem("tasbeehCount", count); // حفظ العدد في localStorage
});

// إعادة الضبط
resetButton.addEventListener("click", () => {
    count = 0;
    counterElement.textContent = count;
    localStorage.setItem("tasbeehCount", count); // حفظ العدد في localStorage
});