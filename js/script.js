window.onload = function () {
    const backgroundImgs = [
        "./images/home-bg-slideshow1.jpg",
        "./images/home-bg-slideshow2.jpg"
    ]
    let changeImageInt = 0;
    let target = document.querySelector(".titleback")

    setInterval(changeImage, 3500);
    function changeImage() {
        changeImageInt = changeImageInt === 0 ? 1 : 0
        target.style.backgroundImage = "url('" + backgroundImgs[changeImageInt] + "')";
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 600 ;
}


document.addEventListener("scroll", () => {
    const target = document.querySelector(".grid_containor")
    if (isInViewport(target)) {
        target.style.opacity = 1        
    }
})
