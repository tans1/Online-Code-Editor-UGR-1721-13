const imagesBox = document.querySelector(".images--box"),
images = imagesBox.querySelectorAll(".image"),
left = document.querySelector(".left")
right = document.querySelector(".right")
let scrolling = false;

function scroll__image(scrollVal){
    let Width = imagesBox.scrollWidth - imagesBox.clientWidth;
    left.parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    right.parentElement.style.display = Width - scrollVal <= 1 ? "none" : "flex";
}

left.addEventListener("click", ()=>{
    let scrollWidth = imagesBox.scrollLeft -= 500 ;
    scroll__image(scrollWidth);
})
right.addEventListener("click", ()=>{
    let scrollWidth = imagesBox.scrollLeft += 500 ;
    scroll__image(scrollWidth);
})


const dragging = (e) => {
    if(!scrolling) return;
    imagesBox.classList.add("dragging");
    imagesBox.scrollLeft -= e.movementX;
    scroll__image(imagesBox.scrollLeft)
}

const dragStop = () => {
    scrolling = false;
    imagesBox.classList.remove("dragging");
}

imagesBox.addEventListener("mousedown", () => scrolling = true);
imagesBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);