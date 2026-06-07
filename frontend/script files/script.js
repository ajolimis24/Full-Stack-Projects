let i = 0;
const card = document.querySelectorAll(".card");

function slideCard() {
    // Hide all cards
    card.forEach(c => {
        c.style.display = "none";
    });

    // Show current card
    card[i].style.display = "flex";

    // Move to next card
    i++;

    // Loop back to first card
    if (i >= card.length) {
        i = 0;
    }
}
setInterval(slideCard, 3000);