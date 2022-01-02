const inputSlider = document.querySelector("input")
const price = document.querySelector(".price")
const pageviews = document.querySelector(".pageviews")

inputSlider.oninput = () => {
    let value = inputSlider.value
    price.textContent = "$" + value + ".00";
    pageviews.textContent = Math.floor(100*value/16) + "k pageviews";
}