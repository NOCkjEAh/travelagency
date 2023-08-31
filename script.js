document.addEventListener("DOMContentLoaded", function () {
    const changingParagraph = document.getElementById("changing-paragraph");
    const paragraphs = [
        "Destinos Fascinantes: Sumérgete en descripciones detalladas de destinos impresionantes de todo el mundo.",
        "Exploración Natural: Descubre senderos escénicos, parques nacionales y maravillas naturales...",
        "Experiencias Auténticas: Te presentamos experiencias fuera de lo común que te permitirán conectarte...",
        "Cultura y Tradiciones: Sumérgete en la riqueza cultural de cada destino a través de relatos sobre festivales..."
    ];
    let currentParagraphIndex = 0;

    function changeParagraph() {
        changingParagraph.textContent = paragraphs[currentParagraphIndex];
        currentParagraphIndex = (currentParagraphIndex + 1) % paragraphs.length;
    }

    // Cambiar de párrafo cada 5 segundos (5000 ms)
    setInterval(changeParagraph, 5000);

    // Cambiar el párrafo inicial
    changeParagraph();

    const productsWrapper = document.querySelector('.products-wrapper');

    if (productsWrapper) {
        productsWrapper.addEventListener('mouseenter', () => {
            productsWrapper.style.animationPlayState = 'paused';
        });

        productsWrapper.addEventListener('mouseleave', () => {
            productsWrapper.style.animationPlayState = 'running';
        });
    }

    const images = document.querySelectorAll('.about-img img');

    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            images.forEach(otherImg => {
                if (otherImg !== img) {
                    otherImg.style.opacity = '0.7';
                }
            });
            img.style.opacity = '1';
        });

        img.addEventListener('mouseout', () => {
            images.forEach(otherImg => {
                otherImg.style.opacity = '1';
            });
        });
    });

    const imagesAndCities = [
        { image: "images/ibiza.jpg", city: "Ibiza" },
        { image: "images/paris.jpg", city: "Paris" },
        { image: "images/dubai.jpg", city: "Dubai" },
        { image: "images/venecia.jpg", city: "Venecia" },
        { image: "images/suecia.jpg", city: "Suecia" },
        { image: "images/londres.jpg", city: "Londres" },
    ];

    let currentImageIndex = 0;

    function changeBackgroundImage() {
        const backgroundImage = document.querySelector(".background-image");
        backgroundImage.style.backgroundImage = `url('${imagesAndCities[currentImageIndex].image}')`;

        const cityName = document.getElementById("cityName");
        cityName.textContent = imagesAndCities[currentImageIndex].city;

        currentImageIndex = (currentImageIndex + 1) % imagesAndCities.length;
    }

    // Cambiar la imagen de fondo al cargar la página
    changeBackgroundImage();

    // Cambiar la imagen de fondo cada 5 segundos (5000 ms)
    setInterval(changeBackgroundImage, 5000);
});
