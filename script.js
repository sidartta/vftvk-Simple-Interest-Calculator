const formCtrl = document.getElementById('calculation-form')
const targetDiv = document.getElementById('result')
const principal = document.getElementById('principal')
const rate = document.getElementById('rate')
const years = document.getElementById('years')

// Input validation
let invalidClassName = 'invalid'
principal.addEventListener('change', (e) => {
  if (principal.value <= 0 || principal.value === '') {
    principal.classList.add(invalidClassName)
  } else {
    principal.classList.remove(invalidClassName)
  }
})

// Listen to submit event
formCtrl.addEventListener('submit', (e) => {
  e.preventDefault()

  let formCheck = true
  if (principal.value <= 0 || principal.value === '') {
    formCheck = false
    alert('Principal value must be a positive number.')
    principal.focus()
  }
  if (formCheck) {
    compute(
      parseInt(principal.value),
      parseFloat(rate.value),
      parseInt(years.value)
    )
  }
})

// Function to Compute the future value of principal with simple interest
function compute(principal, rate, years) {
  const futureValue = principal * ((rate / 100) * years)
  const todayYear = new Date().getFullYear()
  const futureYear = todayYear + years

  const resultCapital = document.getElementById('result-capital')
  const resultRate = document.getElementById('result-rate')
  const resultFutureValue = document.getElementById('result-future-value')
  const resultFutureYear = document.getElementById('result-future-year')

  resultCapital.innerText = principal
  resultRate.innerText = rate + '%'
  resultFutureValue.innerText = futureValue
  resultFutureYear.innerText = futureYear

  let results = document.querySelectorAll('.highlight')
  for (i = 0; i < results.length; i++) {
    results[i].style.backgroundColor = 'yellow'
  }

  targetDiv.style.visibility = 'visible'
}
