function compute() {
  principal = parseInt(document.getElementById('principal').value)
  rate = parseFloat(document.getElementById('rate').value)
  years = parseInt(document.getElementById('years').value)

  futureValue = principal * (1 + (rate / 100) * years)
  console.log(principal)
  console.log(rate)
  console.log(years)
  console.log(futureValue)
  todayYear = new Date().getFullYear()
  futureYear = todayYear + years

  let resultCapital = document.getElementById('result-capital')
  let resultRate = document.getElementById('result-rate')
  let resultFutureValue = document.getElementById('result-future-value')
  let resultFutureYear = document.getElementById('result-future-year')

  resultCapital.innerText = principal
  resultRate.innerText = rate + '%'
  resultFutureValue.innerText = futureValue
  resultFutureYear.innerText = futureYear

  resultCapital.style.backgroundColor = 'yellow'
  resultRate.style.backgroundColor = 'yellow'
  resultFutureValue.style.backgroundColor = 'yellow'
  resultFutureYear.style.backgroundColor = 'yellow'

  let targetDiv = document.getElementById('result')

  targetDiv.style.visibility = 'visible'
}
