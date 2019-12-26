let images = document.getElementsByClassName("images");
let slideIndex = 1;
let dots = document.getElementsByClassName("dot");

let loadImage = () => {
    showImage(slideIndex);
}

let slideShow = () => {
    showImage(slideIndex=2+slideIndex);
}

let showImage = (n) => {
    let i;
    if(n > images.length) {
        slideIndex = 1;
    }
    for(i = 0; i < images.length; i++) {
        images[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    images[--slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
    setTimeout(slideShow,2000)
}

loadImage();

let toggle = document.getElementById("container");
let nav = document.querySelector("nav");

let toggl = () => {
    toggle.classList.toggle("active1");
    if(nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

toggle.addEventListener("click" , toggl);

let login = document.getElementById("login");

let form = document.getElementById("form");

let cancal = document.getElementsByClassName("close");

let displayForm = () => {
    form.style.display= "block";
}

let closeForm = () => {
    form.style.display = "none";
}

login.addEventListener("click" , displayForm);
cancal.addEventListener("click" , closeForm);

