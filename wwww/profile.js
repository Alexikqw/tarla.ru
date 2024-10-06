if(localStorage.length > 1){
    document.querySelector(".name-profile").innerHTML = `${localStorage.getItem("name")}`;
    document.querySelector(".surname-profile").innerHTML = `${localStorage.getItem("surname")}`;
    document.querySelector(".mail-profile").innerHTML = `${localStorage.getItem("mail")}`;
    document.querySelector(".password-profile").innerHTML = `${localStorage.getItem("password")}`
}

document.querySelector(".main-page").addEventListener("click", function(event) {
    event.preventDefault();
    if(window.location.href == "./index.html"){
    location.reload();
    } else {
        window.location.href = "./index.html"
    }
});

document.querySelector(".shop-page").addEventListener("click", function(event) {
    event.preventDefault();
    if(window.location.href == "./shop.html"){
    location.reload();
    } else {
        window.location.href = "./shop.html"
    }
});