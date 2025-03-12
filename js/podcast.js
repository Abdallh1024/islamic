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

    // تهيئة Fuse.js للبحث المرن
    const lessons = Array.from(document.querySelectorAll('.page-content')).map(lesson => ({
        id: lesson.id,
        title: lesson.querySelector('h2').textContent.toLowerCase()
    }));

    const fuse = new Fuse(lessons, {
        keys: ['title'], // البحث في عناوين الدروس
        threshold: 0.3, // مستوى التشابه المطلوب (كلما قل الرقم، زادت الدقة)
        ignoreLocation: true, // تجاهل موقع الكلمة في النص
    });

    // وظيفة البحث
    document.getElementById('search-button').addEventListener('click', function () {
        const searchTerm = document.getElementById('search-input').value.toLowerCase(); // الجملة المدخلة
        const noResultsMessage = document.getElementById('no-results-message'); // رسالة "لا يوجد نتائج"
        let foundResults = false; // متغير لتتبع وجود نتائج

        if (searchTerm.trim() === "") {
            return; // لا تفعل شيئًا إذا كان مربع البحث فارغًا
        }

        // البحث باستخدام Fuse.js
        const results = fuse.search(searchTerm);

        // إخفاء جميع الدروس أولاً
        document.querySelectorAll('.page-content').forEach(lesson => {
            lesson.style.display = 'none';
        });

        // إظهار الدروس التي تطابقت مع البحث
        if (results.length > 0) {
            results.forEach(result => {
                document.getElementById(result.item.id).style.display = 'block'; // إظهار الدرس
            });
            foundResults = true; // تم العثور على نتائج
        }

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
            document.querySelectorAll('.page-content').forEach(lesson => {
                lesson.style.display = 'block'; // إظهار جميع الدروس
            });
            document.getElementById('no-results-message').style.display = 'none'; // إخفاء الرسالة
        }
    });