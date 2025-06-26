const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section--active');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

const form = document.getElementById('contactForm');
const status = document.getElementById('form-status');

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        status.innerText = "Bericht verzonden!";
        form.reset();
    } else {
        status.innerText = "Er ging iets mis. Probeer het opnieuw.";
    }
});