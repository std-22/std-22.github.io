function myFunction(imgs) {
    var expandText = document.getElementById("Ilya-info");
    expandText.style.display = "none";

    expandText = document.getElementById("Ashot-info");
    expandText.style.display = "none";

    expandText = document.getElementById("r2");
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
        case "Noname":
            expandText = document.getElementById("r2");
            expandText.style.display = "block";
            break;
    }
}
