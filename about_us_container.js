function myFunction(imgs) {
    var expandText = document.getElementById("Ilya-info");
    expandText.style.display = "none";

    expandText = document.getElementById("Ashot-info");
    expandText.style.display = "none";

    expandText = document.getElementById("Nadya-info");
    expandText.style.display = "none";
    
    switch(imgs.alt){
        case "Ilya":
            expandText = document.getElementById("Ilya-info");
            expandText.style.display = "block";
            break;
        case "Ashot":
            expandText = document.getElementById("Ashot-info");
            expandText.style.display = "block";
            break;
        case "Nadya":
            expandText = document.getElementById("Nadya-info");
            expandText.style.display = "block";
            break;
    }
}
