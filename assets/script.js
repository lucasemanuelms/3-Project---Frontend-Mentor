const submitBtn = document.querySelector('.subBtn')
var principalCard = document.querySelector('.principalCard')
var secondCard = document.querySelector('.secondCard')

submitBtn.addEventListener('click', () => {
    principalCard.style.display = 'none'
    secondCard.style.display = 'block'
})

const rate = document.querySelector('#rate')
const options = document.querySelectorAll('.btn')

options.forEach(element => {
    element.addEventListener('click', () => {
        rate.innerHTML = element.innerHTML
    })
})
