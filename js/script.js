const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

// parseInt is a counts for every click number.value eirther more or less
// SubtractHandle holds newValue data
const subtractHandler = () => {
    const newValue = parseInt(number.value) - 1
    number.value = newValue;
}
// addHandle holds newValue data
const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)