const selectContainer = document.querySelector('.container');
const selectSection = document.querySelector('.section');
const selectOptionButton = document.querySelectorAll(".button");

const selectPoints = document.getElementById("points");
const submitButton = document.getElementById('sub');

submitButton.addEventListener('click', ()=>{
    selectSection.classList.remove("hidden");
    selectContainer.classList.add("hidden");
})

selectOptionButton.forEach((rate) =>{
    rate.addEventListener('click', ()=>{
        selectPoints.innerHTML = rate.innerHTML;
    })
})