
/* ---- 1. Highlight the current section in the navigation ---- */
const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("section[id]");

/* IntersectionObserver watches which section is in view as you scroll */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach((link) => {
                    /* active link gets the same accent colour as a hover */
                    link.classList.toggle("active", link.hash === "#" + id);
                });
            }
        });
    },
    { rootMargin: "-40% 0px -55% 0px" }  // section counts as "current" near the top of the screen
);

sections.forEach((section) => observer.observe(section));

/* ---- 2. Contact form: display a confirmation message ---- */
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();  // demo site: do not actually send data anywhere

    /* remove the message if the user submits again */
    const old = form.querySelector(".form-note");
    if (old) old.remove();

    const note = document.createElement("p");
    note.className = "form-note";
    note.textContent = "Thank you! We will get back to you soon.";
    form.appendChild(note);
    form.reset();
});
