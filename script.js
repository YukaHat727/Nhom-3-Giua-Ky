
// ===== 1. MENU MOBILE =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Đóng menu khi chọn mục điều hướng
document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// ===== 2. DARK MODE / LIGHT MODE =====
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeBtn.innerHTML = isLight
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
});



// ===== 4. NÚT CUỘN LÊN ĐẦU TRANG =====
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {
    backTop.classList.toggle("show", window.scrollY > 300);
});

backTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===== 5. KIỂM TRA FORM LIÊN HỆ =====
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
        formMessage.textContent =
            "Vui lòng nhập đầy đủ các trường bắt buộc.";
        return;
    }

    if (!emailPattern.test(email)) {
        formMessage.textContent =
            "Địa chỉ email chưa đúng định dạng.";
        return;
    }

    formMessage.textContent =
        "Thông tin hợp lệ! Đây là bản demo, tin nhắn chưa được gửi đi.";

    contactForm.reset();
});

// ===== 6. TỰ ĐỘNG CẬP NHẬT NĂM =====
document.getElementById("year").textContent =
    new Date().getFullYear();
