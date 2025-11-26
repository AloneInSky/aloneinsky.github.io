function Sendmail(){
    var uri = "mailto:stephenyosafat.id@gmail.com?";
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    var greet = `Hi Steph, im ${name}\n`;
    uri += `subject=${encodeURIComponent(greet + subject)}&`;
    uri += `body=${encodeURIComponent(message)}`;
    window.open(uri, '_blank');
}

function SendWhatsapp(){
    var uri = "https://wa.me/6282257577792?"
    const name = document.getElementById("name").value;
    const subject = "*" + document.getElementById("subject").value + "*";
    const message = document.getElementById("message").value;
    var greet = `\n\nHi Steph, im ${name}\n\n`;
    uri += `text=${encodeURIComponent(subject + greet + message)}&`;
    window.open(uri, '_blank');
}

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("main-content");
    setTimeout(() => {
        preloader.classList.add("opacity-0");
        setTimeout(() => {
            preloader.style.display = "none";
            content.classList.remove("opacity-0");
        }, 700); 
    }, 1000); 
});

const sections = document.querySelectorAll("section");
const navLinks = {
    about: document.getElementById("link-about"),
    experience: document.getElementById("link-experience"),
    projects: document.getElementById("link-projects"),
    certification: document.getElementById("link-certification"),
    contact: document.getElementById("link-contact"),
};

const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            Object.values(navLinks).forEach(link => {
                link.classList.remove("active");
            });
            const id = entry.target.id;
                navLinks[id].classList.add("active");
            }
        });
    }, { threshold: 0.6 }
);

sections.forEach((section) => observer.observe(section));