let slides = document.querySelectorAll(".slide_container");
let position = 0;


function prox() {
slides[position].classList.remove("active");
position = (position + 1) % slides.length;

slides[position].classList.add("active");
}


function anterior() {
    slides[position].classList.remove("active");
    position = (position - 1 + slides.length) % slides.length;
    
    slides[position].classList.add("active");
    }


setInterval(prox,7000);

