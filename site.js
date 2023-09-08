(function() {
    document.addEventListener("mousemove", parallax);
    const elem1 = document.querySelector(".shapes");
    const elem2 = document.querySelector(".shapes2");
    const elem3 = document.querySelector(".shapes3");
    function parallax(e) {
        let width = window.innerWidth/2;
        let height = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        elem1.style.top = `${0 - (mouseY - height) * 0.01}%`
        elem1.style.left = `${0 - (mouseX - width) * 0.01}%`
        elem2.style.top = `${0 - (mouseY - height) * -0.005}%`
        elem2.style.left = `${0 - (mouseX - width) * -0.005}%`
        elem3.style.top = `${0 - (mouseY - width) * 0.005}%`
        elem3.style.left = `${0 - (mouseX - width) * 0.005}%`


    }
})();