const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const CurrencyValueToConverted = document.querySelector(".currency-value") //Outras Moedas


    console.log(currencySelect.value)
    const dolarToday = 5.73
    const euroToday = 6.2


    if(currencySelect.value == "dolar"){
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {         //Modelo para formatar a moeda para Dólar Americano
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {            //Modelo para Formatar a moeda Real corretamente
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)