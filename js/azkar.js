// JavaScript لعرض الأذكار
const morningBtn = document.getElementById("morning-btn");
const eveningBtn = document.getElementById("evening-btn");
const sleepBtn = document.getElementById("sleep-btn"); 
const beforeprayerbtn = document.getElementById("BeforePrayer-btn"); 

const morningAzkar = document.getElementById("morning-azkar");
const eveningAzkar = document.getElementById("evening-azkar");
const sleepAzkar = document.getElementById("sleep-azkar"); 
const beforeprayerazkar = document.getElementById("BeforePrayer-azkar"); 

morningBtn.addEventListener("click", () => {
    morningAzkar.style.display = "block";
    eveningAzkar.style.display = "none";
    sleepAzkar.style.display = "none";
        beforeprayerazkar.style.display ="none";
});

eveningBtn.addEventListener("click", () => {
    eveningAzkar.style.display = "block";
    morningAzkar.style.display = "none";
    sleepAzkar.style.display = "none";
        beforeprayerazkar.style.display ="none";
});

sleepBtn.addEventListener("click", () => {
    sleepAzkar.style.display = "block";
    morningAzkar.style.display = "none";
    eveningAzkar.style.display = "none";
        beforeprayerazkar.style.display ="none";
});
beforeprayerbtn.addEventListener("click", () => {
    sleepAzkar.style.display = "none";
    morningAzkar.style.display = "none";
    eveningAzkar.style.display = "none";
    beforeprayerazkar.style.display ="block";
});

