function init(){
    var star = "";
    var elements = document.querySelector(".elements");
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;

    var style = ["style1", "style2", "style3"];
    var size = ["size1", "size1", "size1", "size1", "size2", "size2", "size3"];
    var opacity = ["opacity1", "opacity2", "opacity3"];
  
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
  
    for (var i = 0; i < 450; i++) {
        star += "<span class='star " + style[getRandomArbitrary(0, 3)] + " " + opacity[getRandomArbitrary(0, 3)] + " "
        + size[getRandomArbitrary(0, 7)] + "' style='animation-delay: ." + getRandomArbitrary(0, 7) + "s; left: "
        + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }
  
    elements.innerHTML = star;
}
  
window.onload = init;
window.onresize = init;
