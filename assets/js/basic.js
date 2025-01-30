function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}
// document.querySelectorAll(".accordion-header").forEach((header) => {
//     header.addEventListener("click", () => {
//         const item = header.parentElement;
//         item.classList.toggle("active");
//     });
// });
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle("active");
    });
});