import anime from 'animejs/lib/anime.es.js'; // Import anime.js library

// Function to create grid elements
function createGridElements(rows, columns) {
    const totalElements = rows * columns;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < totalElements; i++) {
        const el = document.createElement('div');
        el.classList.add('el');
        fragment.appendChild(el);
    }

    document.body.appendChild(fragment);
}

// Create grid elements
createGridElements(14, 5); // Create a grid of 14 rows and 5 columns

// Animate grid elements
anime({
    targets: 'body .el',
    scale: [
        { value: 0.1, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: 'center' })
});
