function Mudarestado() {
    var display = document.getElementById("video").style.display;
    if(display == "none")
        document.getElementById("video").style.display = 'block';
    else
        document.getElementById("video").style.display = 'none';
}
