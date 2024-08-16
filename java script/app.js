let activesSlideNumber = 1;


let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

let hideActiveSlide = () => {
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
}

let showSlide = (slideNumber) => {
   hideActiveSlide();
   document.querySelector("#slide" + slideNumber).classList.add("active");
}

let showNextSlide = () => {
    if (activesSlideNumber === 3) {
        activesSlideNumber = 1;
    }
    else {
        activesSlideNumber = activesSlideNumber + 1;
    }
    showSlide(activesSlideNumber);
}

let showPreviousSlide = () => {
    if (activesSlideNumber === 1) {
        activesSlideNumber = 3;
    }
    else {
        activesSlideNumber = activesSlideNumber - 1;
    }
    showSlide(activesSlideNumber);
}

for(let i=1; i<=3; i++) {
    let showSlideI = () => {
        showSlide(i);
        activesSlideNumber = i;
    }
    document.querySelector("#dot" + i).addEventListener("click", showSlideI);
}    

arrowLeft.addEventListener("click", showPreviousSlide);
arrowRight.addEventListener("click", showNextSlide);
