const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

// parseInt is a counts for every click number.value eirther more or less
// SubtractHandle holds newValue data
const subtractHandler = () => {
    const newValue = parseInt(number.value) - 1
    number.value = newValue;

    if (add.disabled === true){
        add.disabled = false 
    }

    if (newValue <= MIN_NUMBER){
        subtract.disabled = true 
    }
}
// addHandle holds newValue data
const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue

    if (subtract.disabled === true){
        subtract.disabled = false 
    }

    if (newValue => MIN_NUMBER){
        add.disabled = true 
    }
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)