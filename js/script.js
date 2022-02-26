// to change background img every 2.5 sec

let backgroundNum = 0;

window.onload = function () {
    var backgroundImg=["../images/home-bg-slideshow1.jpg",
                      "../images/home-bg-slideshow2.jpg"
                      ]
    
      setInterval(changeImage, 2500);
    function changeImage() {
        const target = document.querySelector(".titleback")

        backgroundNum = backgroundNum == 0 ? 1 : 0;

        target.style.backgroundImage = "url('"+backgroundImg[backgroundNum]+"')";
    }
  }