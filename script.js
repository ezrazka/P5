document.addEventListener("DOMContentLoaded", function () {
    const titleCard = document.getElementById("title-card");
    const sections = document.querySelectorAll("section");
    const leftContents = document.querySelectorAll(".content.left");
    const rightContents = document.querySelectorAll(".content.right");
    const navbar = document.querySelector("nav");

    document.body.style.overflow = "hidden";

    setTimeout(() => {
        titleCard.classList.add("shown");
    }, 500);
    setTimeout(() => {
        titleCard.classList.remove("shown");
    }, 3000);
    setTimeout(() => {
        titleCard.classList.add("hidden");
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
    }, 3000);
    setTimeout(() => {
        titleCard.remove();
        window.addEventListener("scroll", function () {
            if (window.scrollY === 0) {
                navbar.classList.add("hidden");
            } else {
                navbar.classList.remove("hidden");
            }

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
    
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    section.classList.add("visible");
                    leftContents[index]?.classList.add("visible");
                    rightContents[index]?.classList.add("visible");
                }
            });
    
            const rect = titleCard.getBoundingClientRect();
            if (rect.bottom < 0) {
                titleCard.classList.add("hidden");
            } else {
                titleCard.classList.remove("hidden");
            }
        });
    }, 4000);
});
