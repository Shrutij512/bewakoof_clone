const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);






const wrapper12 = document.querySelector(".wrapper12");
const carousel12 = document.querySelector(".carousel12");
const firstCardWidth12 = carousel12.querySelector(".card12").offsetWidth;
const arrowBtns12 = document.querySelectorAll(".wrapper12 i");
const carouselChildrens12 = [...carousel12.children];

let isDragging12 = false, isAutoPlay12 = true, startX12, startScrollLeft12, timeoutId12;

// Get the number of cards that can fit in the carousel at once
let cardPerView12 = Math.round(carousel12.offsetWidth / firstCardWidth12);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens12.slice(-cardPerView12).reverse().forEach(card12 => {
    carousel12.insertAdjacentHTML("afterbegin", card12.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens12.slice(0, cardPerView12).forEach(card12 => {
    carousel12.insertAdjacentHTML("beforeend", card12.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel12.classList.add("no-transition");
carousel12.scrollLeft = carousel12.offsetWidth;
carousel12.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns12.forEach(btn12 => {
    btn12.addEventListener("click", () => {
        carousel12.scrollLeft += btn12.id == "left12" ? -firstCardWidth12 : firstCardWidth12;
    });
});

const dragStart12 = (e) => {
    isDragging12 = true;
    carousel12.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX12 = e.pageX12;
    startScrollLeft12 = carousel12.scrollLeft;
}

const dragging12 = (e) => {
    if(!isDragging12) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel12.scrollLeft = startScrollLeft12 - (e.pageX12 - startX12);
}

const dragStop12 = () => {
    isDragging12 = false;
    carousel12.classList.remove("dragging");
}

const infiniteScroll12 = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel12.scrollLeft === 0) {
        carousel12.classList.add("no-transition");
        carousel12.scrollLeft = carousel12.scrollWidth - (2 * carousel12.offsetWidth);
        carousel12.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel12.scrollLeft) === carousel12.scrollWidth - carousel12.offsetWidth) {
        carousel12.classList.add("no-transition");
        carousel12.scrollLeft = carousel12.offsetWidth;
        carousel12.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId12);
    if(!wrapper12.matches(":hover")) autoPlay12();
}

const autoPlay12 = () => {
    if(window.innerWidth < 800 || !isAutoPlay12) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId12 = setTimeout(() => carousel12.scrollLeft += firstCardWidth12, 2500);
}
autoPlay12();

carousel12.addEventListener("mousedown", dragStart12);
carousel12.addEventListener("mousemove", dragging12);
document.addEventListener("mouseup", dragStop12);
carousel12.addEventListener("scroll", infiniteScroll12);
wrapper12.addEventListener("mouseenter", () => clearTimeout(timeoutId12));
wrapper12.addEventListener("mouseleave", autoPlay12);






const wrapper17 = document.querySelector(".wrapper17");
const carousel17 = document.querySelector(".carousel17");
const firstCardWidth17 = carousel17.querySelector(".card17").offsetWidth;
const arrowBtns17 = document.querySelectorAll(".wrapper17 i");
const carouselChildrens17 = [...carousel17.children];

let isDragging17 = false, isAutoPlay17 = true, startX17, startScrollLeft17, timeoutId17;

// Get the number of cards that can fit in the carousel at once
let cardPerView17 = Math.round(carousel17.offsetWidth / firstCardWidth17);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens17.slice(-cardPerView17).reverse().forEach(card17 => {
//     carousel17.insertAdjacentHTML("afterbegin", card17.outerHTML);
// });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens17.slice(0, cardPerView17).forEach(card17 => {
//     carousel17.insertAdjacentHTML("beforeend", card17.outerHTML);
// });

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel17.classList.add("no-transition");
carousel17.scrollLeft = carousel17.offsetWidth;
carousel17.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns17.forEach(btn17 => {
    btn17.addEventListener("click", () => {
        carousel17.scrollLeft += btn17.id == "left17" ? -firstCardWidth12 : firstCardWidth12;
    });
});

const dragStart17 = (e) => {
    isDragging17 = true;
    carousel17.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX17 = e.pageX17;
    startScrollLeft17 = carousel17.scrollLeft;
}

// const dragging17 = (e) => {
//     if(!isDragging17) return; // if isDragging is false return from here
//     // Updates the scroll position of the carousel based on the cursor movement
//     carousel17.scrollLeft = startScrollLeft17 - (e.pageX17 - startX17);
// }

const dragStop17 = () => {
    isDragging17 = false;
    carousel17.classList.remove("dragging");
}

const infiniteScroll17 = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel17.scrollLeft === 0) {
        carousel17.classList.add("no-transition");
        carousel17.scrollLeft = carousel17.scrollWidth - (2 * carousel17.offsetWidth);
        carousel17.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel17.scrollLeft) === carousel17.scrollWidth - carousel17.offsetWidth) {
        carousel17.classList.add("no-transition");
        carousel17.scrollLeft = carousel17.offsetWidth;
        carousel17.classList.remove("no-transition");
    }

   // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId17);
    if(!wrapper17.matches(":hover")) autoPlay17();
}



carousel17.addEventListener("mousedown", dragStart17);
carousel17.addEventListener("mousemove", dragging17);
document.addEventListener("mouseup", dragStop17);
carousel17.addEventListener("scroll", infiniteScroll17);

wrapper17.addEventListener("mouseenter", () => clearTimeout(timeoutId17));
wrapper17.addEventListener("mouseleave", autoPlay17);

