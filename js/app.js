window.onload = () => {
    const carouselSlide = document.querySelector(`.carousel`);
    const carouselImages = document.querySelectorAll(`.carousel-slide img`);
    const nextButton = document.querySelector(`#button-next`);
    const previousButton = document.querySelector(`#button-previous`);

    let counter = 1;
    const size = carouselImages[0].clientWidth;
    carouselSlide.style.tranform = `translateX(` + (-size * counter) + `px)`;

    nextButton.addEventListener(`click`, () => {
        if (counter >= (carouselImages.length - 1)) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.tranform = `translateX(` + (-size * counter) + `px)`;
        console.log(counter);
    });

    previousButton.addEventListener(`click`, () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.tranform = `translateX(` + (-size * counter) + `px)`;
        console.log(counter);
    });

    carouselSlide.addEventListener(`transitionend`, () => {
        console.log(carouselImages[counter]);
        if (carouselImages[counter].id === `last`) {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.tranform = `translateX(` + (-size * counter) + `px)`;
        }
        if (carouselImages[counter].id === `first`) {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.tranform = `translateX(` + (-size * counter) + `px)`;
        }
    });
};
