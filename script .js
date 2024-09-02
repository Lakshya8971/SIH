document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const submissionForm = document.getElementById('submissionForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you for contacting us! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    if (submissionForm) {
        submissionForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you for your submission! We will review your idea and get back to you.');
            submissionForm.reset();
        });
    }
});
