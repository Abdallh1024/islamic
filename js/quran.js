// رابط API القرآن الكريم
const quranAPI = "https://api.alquran.cloud/v1/quran/ar.alafasy";

// العنصر الذي سيتم عرض القرآن فيه
const quranContainer = document.getElementById("quran-container");

// أزرار التصفح
const prevPageButton = document.getElementById("prev-page");
const nextPageButton = document.getElementById("next-page");
const pageNumber = document.getElementById("page-number");

// متغيرات التصفح
let currentSurahIndex = 0;
let currentPageIndex = 0;
let surahs = [];
const versesPerPage = 15; // عدد الآيات في كل صفحة (يمكن تعديله)

// دالة لجلب القرآن
async function fetchQuran() {
    try {
        const response = await fetch(quranAPI);

        // التحقق من حالة الاستجابة
        if (!response.ok) {
            throw new Error("حدث خطأ أثناء جلب البيانات من الخادم.");
        }

        const data = await response.json();

        if (data.code === 200 && data.status === "OK") {
            surahs = data.data.surahs;
            displayPage(currentSurahIndex, currentPageIndex);
        } else {
            quranContainer.innerHTML = "<p>حدث خطأ أثناء جلب القرآن الكريم.</p>";
        }
    } catch (error) {
        console.error("Error:", error);
        quranContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

// دالة لعرض صفحة معينة من السورة
function displayPage(surahIndex, pageIndex) {
    if (surahIndex >= 0 && surahIndex < surahs.length) {
        const surah = surahs[surahIndex];
        const start = pageIndex * versesPerPage;
        const end = start + versesPerPage;

        const html = `<div class="surah">
                        <h3>سورة ${surah.name} (${surah.englishName})</h3>
                        <div class="ayahs">
                            ${surah.ayahs.slice(start, end).map((ayah) => `<p>(${ayah.numberInSurah}) ${ayah.text}</p>`).join("")}
                        </div>
                      </div>`;
        quranContainer.innerHTML = html;

        // تحديث رقم الصفحة
        pageNumber.textContent = `الصفحة ${pageIndex + 1}`;
    }
}

// أحداث أزرار التصفح
prevPageButton.addEventListener("click", () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        displayPage(currentSurahIndex, currentPageIndex);
    } else if (currentSurahIndex > 0) {
        currentSurahIndex--;
        currentPageIndex = Math.floor(surahs[currentSurahIndex].ayahs.length / versesPerPage);
        displayPage(currentSurahIndex, currentPageIndex);
    }
});

nextPageButton.addEventListener("click", () => {
    const surah = surahs[currentSurahIndex];
    const totalPages = Math.ceil(surah.ayahs.length / versesPerPage);

    if (currentPageIndex < totalPages - 1) {
        currentPageIndex++;
        displayPage(currentSurahIndex, currentPageIndex);
    } else if (currentSurahIndex < surahs.length - 1) {
        currentSurahIndex++;
        currentPageIndex = 0;
        displayPage(currentSurahIndex, currentPageIndex);
    }
});

// جلب القرآن عند تحميل الصفحة
fetchQuran();
