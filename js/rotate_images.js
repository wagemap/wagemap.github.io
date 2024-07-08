document.addEventListener("DOMContentLoaded", function() {
    const images = [
       "img/bananas_1000.jpg",
       "img/care_portrait_1000.jpg",
        "img/metal_factory_portrait_1000.jpg",
        "img/sewing_portrait_1000.jpg"
    ];
    let currentIndex = 0;
    let nextIndex = 1;
    const imageElements = [
        document.getElementById("image1"),
        document.getElementById("image2")
    ];

    function changeImage() {
        const currentImage = imageElements[currentIndex % 2];
        const nextImage = imageElements[nextIndex % 2];

        nextImage.src = images[nextIndex];
        currentImage.classList.add("hidden");
        nextImage.classList.remove("hidden");

        setTimeout(() => {
            currentIndex = nextIndex;
            nextIndex = (nextIndex + 1) % images.length;
        }, 1000); // Match this to the CSS transition duration (1s)
    }

    setInterval(changeImage, 5000);
});