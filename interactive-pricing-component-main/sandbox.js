let view = document.querySelector(".pageview");
let price = document.querySelector(".actual-price");
let slider = document.querySelector("#slider");
let toggle = document.querySelector("#checkbox");
let pageViews = ['10k', '50k', '100k', '500k', '1M'];
let perMonth = [8, 12, 16, 24, 36];
let yearly = false

const backgd = document.querySelector(".toggle-container");


slider.addEventListener("input", function(){
    updateValue();
    view.innerHTML = pageViews[slider.value]

    let movement = this.value * 25;
    this.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${movement}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`
});

toggle.addEventListener('input', function(){
    if(yearly === false){
        yearly = true
        backgd.style.backgroundColor = "green";
    } else {
        yearly = false
        backgd.style.backgroundColor = "hsl(224, 65%, 95%)";
    }
    updateValue();
});


function updateValue(){
    if(yearly){
        price.innerHTML = perMonth[slider.value] * 0.75
    } else {
        price.innerHTML = perMonth[slider.value]
    }
}
