let topButton = document.getElementById("top")
let nav = document.getElementById("nav")
console.log(nav.offsetHeight);

//on clicking the top button
topButton.addEventListener("click", () => {
    window.scrollTo(0, 0)
})
// while scrolling appears the bottom 
window.addEventListener("scroll", () => {
    if (window.scrollY >= nav.offsetHeight) {
        topButton.classList.remove("d-none")
    }
    else {
        topButton.classList.add("d-none")
    }

    console.log(window.scrollY);


})