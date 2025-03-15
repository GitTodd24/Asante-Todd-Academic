window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    document.querySelector(".tm-item-container-contact").style.transform = `translateY(${scrollTop * 0.5}px)`;
});