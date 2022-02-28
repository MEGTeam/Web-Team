window.onload = function () {
    const backgroundImgs = [
        "../images/home-bg-slideshow1.jpg",
        "../images/home-bg-slideshow2.jpg"
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
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


document.addEventListener("scroll", () => {
    const viewedElement = document.querySelector(".small_nav")
    const target = document.querySelector(".grid_containor")
    if (isInViewport(viewedElement)) {
        target.style.opacity = 1        
    }
})

