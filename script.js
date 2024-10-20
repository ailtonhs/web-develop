const burguer = document.getElementById("burguer");

burguer.addEventListener("click", clickMenu);

let menu = document.getElementById("menu");


function clickMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};

function mudouTamanho() {
    if (innerWidth > 768) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};