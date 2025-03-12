// إظهار وإخفاء القائمة الجانبية وتحويل الأيقونة إلى "X"
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("active"); // تحويل الأيقونة إلى "X"
});
// تفعيل أنميشن الأقسام عند الوصول إليها
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 }); // تفعيل الأنيميشن عند ظهور 50% من العنصر

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// عداد الزوار
document.addEventListener("DOMContentLoaded", function () {
    // تحقق مما إذا كان العدد مخزنًا في localStorage
    let visitorCount = localStorage.getItem('visitorCount');

    // إذا لم يكن موجودًا، قم بتهيئته إلى 0
    if (!visitorCount) {
        visitorCount = 0;
    }

    // زيادة العدد بمقدار 1
    visitorCount = parseInt(visitorCount) + 1;

    // حفظ العدد المحدث في localStorage
    localStorage.setItem('visitorCount', visitorCount);

    // عرض العدد في الصفحة
    document.getElementById('visitor-count').textContent = visitorCount;
});
// JavaScript للتحكم في أيقونة العودة إلى الأعلى
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    // إظهار أو إخفاء الأيقونة عند التمرير
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // إذا تم التمرير لأكثر من 300 بكسل
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    });

    // العودة إلى الأعلى عند النقر على الأيقونة
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0, // الانتقال إلى أعلى الصفحة
            behavior: "smooth" // تأثير التمرير السلس
        });
    });
});

// JavaScript لإظهار/إخفاء القائمة الفرعية في الشاشات الصغيرة
document.getElementById('lessons-link').addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
        e.preventDefault(); // منع الانتقال إلى الصفحة
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('active');
    }
});