document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector(".nav");
    const toggle = document.getElementById("toggle");
    const closeBtn = document.getElementById("close");

    if (toggle) {
        toggle.onclick = function () {
            menu.classList.add("active");
            toggle.style.display = 'none';
            closeBtn.style.display = 'block';
        }
    }

    if (closeBtn) {
        closeBtn.onclick = function () {
            menu.classList.remove("active");
            toggle.style.display = 'block';
            closeBtn.style.display = 'none';
        }
    }


    const plugin = gsap.registerPlugin(ScrollTrigger);
    console.log(plugin);

    const image = document.querySelector(".image-overlay img");

    gsap.to(image, {
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        x: "-120vw",
        y: "100vh",
        duration: 4
    });


    gsap.from(".card", {
        y: 50,
        opacity: 0,
        duration: 0.4,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".offer-section",
            start: "top center",
            toggleActions: "play none none reserve"
        }
    });

});