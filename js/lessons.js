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
        
                // تحميل الفيديوهات بشكل كسول (Lazy Loading) عند التمرير إليها
                document.addEventListener("DOMContentLoaded", function () {
                    const lazyVideos = document.querySelectorAll("iframe[data-src]");
        
                    const lazyVideoObserver = new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const iframe = entry.target;
                                iframe.setAttribute("src", iframe.getAttribute("data-src"));
                                iframe.removeAttribute("data-src");
                                lazyVideoObserver.unobserve(iframe);
                            }
                        });
                    });
        
                    lazyVideos.forEach(video => {
                        lazyVideoObserver.observe(video);
                    });
                })
    // وظيفة البحث
    document.getElementById('search-button').addEventListener('click', function () {
        const searchTerm = document.getElementById('search-input').value.toLowerCase(); // الجملة المدخلة
        const lessons = document.querySelectorAll('.page-content'); // كل أقسام الدروس
        const noResultsMessage = document.getElementById('no-results-message'); // رسالة "لا يوجد نتائج"
        let foundResults = false; // متغير لتتبع وجود نتائج

        if (searchTerm.trim() === "") {
            return; // لا تفعل شيئًا إذا كان مربع البحث فارغًا
        }

        lessons.forEach(lesson => {
            const lessonTitle = lesson.querySelector('h2').textContent.toLowerCase(); // عنوان الدرس
            if (lessonTitle.includes(searchTerm)) {
                lesson.style.display = 'block'; // إظهار الدرس إذا تطابقت الجملة
                foundResults = true; // تم العثور على نتائج
            } else {
                lesson.style.display = 'none'; // إخفاء الدرس إذا لم تتطابق الجملة
            }
        });

        // إظهار أو إخفاء رسالة "لا يوجد نتائج"
        if (foundResults) {
            noResultsMessage.style.display = 'none'; // إخفاء الرسالة إذا وجدت نتائج
        } else {
            noResultsMessage.style.display = 'block'; // إظهار الرسالة إذا لم توجد نتائج
        }
    });

    // إعادة عرض جميع الدروس عند حذف البحث
    document.getElementById('search-input').addEventListener('input', function () {
        if (this.value === '') {
            const lessons = document.querySelectorAll('.page-content');
            lessons.forEach(lesson => {
                lesson.style.display = 'block'; // إظهار جميع الدروس
            });
            document.getElementById('no-results-message').style.display = 'none'; // إخفاء الرسالة
        }
    });