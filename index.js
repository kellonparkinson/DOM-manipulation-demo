// Step 1: Grab html element
const plusBtn = document.querySelector('#plus-btn')
// plusBtn variable is representing the html element with the 
// #plus-btn id

const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const counterTxt = document.querySelector('#counter')

// Step 2: write function
let count = 0
// 'count' is an independent variable that we are using to store the return value from the different functions

const increase = () => {
    count++
    counterTxt.textContent = count
}

const decrease = () => {
    count--
    counterTxt.textContent = count
}

const reset = () => {
    count = 0
    counterTxt.textContent = count
}

// Step 3: combine steps 1 and 2 using addEventListener
plusBtn.addEventListener('click', increase)
// telling the 'plusBtn' to listen for events ('click' in this case) in order for our js file to update the DOM, using the 'increase' function

minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

// Section 2: Themes

// Step 1:
const themeBtns = document.querySelectorAll('.theme-buttons')

// Step 2:
const applyTheme = (event) => {
    console.log(event.target)
    const theme = event.target.textContent
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    const btns = document.querySelectorAll('button')
    for (let i = 0; i < btns.length; i++) {
        btns[i].className = theme
    }
}

// Step 3:
for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', applyTheme)
}