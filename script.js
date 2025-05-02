document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target)
            }
        });
    }, {
        threshold: 0.5
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    const lines = document.querySelectorAll('.line');
    let currentIndex = 0;

    function showNextLine() {
        lines[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % lines.length;
        const nextLine = lines[currentIndex];

        nextLine.style.display = 'block';
        nextLine.style.animation = 'none'; 
        nextLine.offsetHeight;
        nextLine.style.animation = 'typingLine 5s steps(30) forwards';
    }
    showNextLine();
    setInterval(showNextLine, 5000);

});