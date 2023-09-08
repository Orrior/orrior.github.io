(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".shapes");
    function parallax(e) {
        let width = window.innerWidth/2;
        let height = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        elem.style.top = `${0 - (mouseY - height) * 0.01}%`
        elem.style.left = `${0 - (mouseX - width) * 0.01}%`

    }
})();