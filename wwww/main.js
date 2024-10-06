const home = document.querySelector(".main-page");
const shop = document.querySelector(".shop-page");

if (localStorage.length >= 1) {
    document.getElementById("profile").innerHTML = `PROFILE`;
}

home.addEventListener("click", function(event) {
    event.preventDefault();
    if(window.location.href == "./index.html"){
    location.reload();
    } else {
        window.location.href = "./index.html"
    }
});


shop.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "/shop.html";
    history.pushState(null, null, window.location.href);
});

document.getElementById('open-modal-btn').addEventListener('click', function() {
    document.getElementById('my-modal').classList.add('open');
});

document.getElementById('close-my-modal').addEventListener('click', function() {
    document.getElementById('my-modal').classList.remove('open');
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('my-modal').classList.remove('open');
    }
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('my-modal');
    if (event.target === modal) {
        modal.classList.remove('open');
    }
});

const signupForm = document.getElementById("signup-form");

async function submiting() {
    await signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        localStorage.setItem("mail", document.getElementById("mail").value);
        localStorage.setItem("password", document.getElementById("password").value);
        localStorage.setItem("name", document.getElementById("name").value);
        localStorage.setItem("surname", document.getElementById("surname").value);  

        

        document.getElementById('my-modal').classList.remove('open');

        alert("you are registred, pelease refresh the page")
    });
}

submiting().then(() => {
    setTimeout(() => {
        location.reload();
    }, 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
);
});



const el = document.querySelector(".adding-card");
el.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./shop.html"
})

if(document.getElementById("profile").innerHTML !== 0){
    document.getElementById("profile").addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = "./profile.html"

    })
}



document.querySelector(".delate-news").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".news-of-day").remove()
})

document.querySelector(".news-answer").addEventListener("submit", function(event){
    alert("congratulations, you're within our delivery zone!");
    document.querySelector(".news-of-day").remove()
})

document.querySelector(".card-adding").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./cart.html"
})