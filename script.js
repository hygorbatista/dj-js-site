// selecionar elementos
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

// abrir e fechar menu
menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = form.querySelector("input[name='nome']").value;
    const email = form.querySelector("input[name='email']").value;
    const mensagem = form.querySelector("textarea[name='mensagem']").value;

    const texto =
        "Olá DJ JS!\n\n" +
        "Meu nome é: " + nome + "\n" +
        "Email: " + email + "\n\n" +
        "Mensagem:\n" + mensagem;

    const telefone = "5548984652688";

    const url = "https://wa.me/" + telefone + "?text=" + encodeURIComponent(texto);

    window.open(url, "_blank");

    form.reset();

});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const images = document.querySelectorAll(".gallery-img");

images.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.9)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";

        const bigImg = document.createElement("img");
        bigImg.src = img.src;
        bigImg.style.maxWidth = "90%";
        bigImg.style.maxHeight = "90%";

        overlay.appendChild(bigImg);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);

    });

});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }

    });

});



