const $ = document;
const container = $.querySelector('#container')
const input = $.querySelector('#range')
input.addEventListener("change", e => {
    container.style.filter = "brightness(" + e.target.value + "%" + ")"
})