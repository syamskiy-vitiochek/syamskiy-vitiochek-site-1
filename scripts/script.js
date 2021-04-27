const calculate = () => {
    let data = prompt("Привет! Я калькулятор. Введите выражение, которое хотите посчитать.");
    if (data === null) {
        alert('Bвод отменён!')
    } else {
        try {
            data = data.replace(/,/g, ".");
            let result = eval(data);
            if (data === '') {
                alert('Bи ничего не ввели!');
            } else if (result === Infinity || result === -Infinity) {
                alert('На нуль делить нельзя!!!');
            } else if (isNaN(result)) {
                isError();
            } else {
                alert(result);
            }
        } catch {
            isError();
        }

    }
};
const isError = () => alert("Введите корректноё выражение!");
const calcucator = document.getElementById("calculator");
calcucator.addEventListener("click", calculate);

//menu-adaptive
const menuAdaptive = document.getElementById("menu-adaptive");
const menu = document.getElementById("menu");
const toggleClass = (elem, className) => elem.classList.toggle(className);


menuAdaptive.addEventListener("click", () => toggleClass(menu, "menu-none"));

//slider
const slides = document.getElementById("slides");
const slide = document.querySelectorAll(".slide");
const togglePrevious = document.getElementById("toggle-previous");
const toggleNext = document.getElementById("toggle-next");
const toggleRadio = document.getElementById("toggle-radio");
const toggleInput = toggleRadio.querySelectorAll("input");
const slidesMin = document.getElementById("slides-min");
const slideMin = slidesMin.querySelectorAll(".slide-min");

let currentSlide = 0;
let slideInterval;
let slideTime = 2000;

continueSlideInterval();
slides.addEventListener("mouseover", stopSlide);
slides.addEventListener("mouseout", continueSlideInterval);
toggleNext.addEventListener("click", showNextSlide);
togglePrevious.addEventListener("click", showPreviousSlide);
toggleRadio.addEventListener("click", toggleSlide);
slidesMin.addEventListener("click", toggleMinSlide);

function continueSlideInterval() {
    slideInterval = setInterval(nextSlide, slideTime);
};
function nextSlide() {
    slideReset();
    currentSlide = ++currentSlide % slide.length;
    slideSet();
};
function stopSlide() {
    clearInterval(slideInterval)
};
function showNextSlide() {
    stopSlide();
    nextSlide();
};

function showPreviousSlide() {
    stopSlide();
    slideReset();
    currentSlide = (currentSlide === 0) ? slide.length - 1 : currentSlide - 1;
    slideSet();
};
function slideReset() {
    slide[currentSlide].className = "slide";
    slideMin[currentSlide].className = "slide-min";
};
function slideSet() {
    slide[currentSlide].className = "slide showing";
    toggleInput[currentSlide].checked = true;
    slideMin[currentSlide].className = "slide-min showing-min";
};
function toggleSlide(event) {
    stopSlide();
    slideReset();
    currentSlide = event.target.value;
    slideSet();
};
function toggleMinSlide(event) {
    if (event.target.tagName === "IMG") {
        stopSlide();
        slideReset();
        currentSlide = event.target.id;
        slideSet();
    };
};

//modal-form
const modalForm = document.getElementById("modal-form");
const started = document.getElementById("started");
const closeForm = document.getElementById("close-form");
closeForm.addEventListener("click", () => toggleClass(modalForm, "d-none"));
started.addEventListener("click", () => toggleClass(modalForm, "d-none"));


/* let div = document.querySelectorAll("div")
console.log(div) */