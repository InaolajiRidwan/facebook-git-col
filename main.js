var img1 = document.getElementById("img1");
var img2 = document.getElementById('img2');
var imgprofile = document.getElementById("imgprofile")


img1.style.display="none";
imgprofile.style.display="none";

function imgs() {
    img1.style.display="block";
    img2.style.display="none";
    imgprofile.style.display="block";
}

function img() {
    img1.style.display="none";
    img2.style.display="block";
    imgprofile.style.display="none";  
}