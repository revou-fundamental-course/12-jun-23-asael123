let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("farenheit")

function showcelsius() {
    let hasil = (parseFloat(celsius.value)* 9) / 5 + 32
    fahrenheit.value = parseFloat(hasil.tofixed(2))
}