const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const suggestion = document.querySelector('#suggestion')

    if(height === "" || height<0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`
        }
    else if(weight === "" || weight<0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid height ${weight}`
        }
    else{
        const bmi = ((weight/(height*height))*10000).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi<18.6){
            suggestion.textContent = `KAM HILA BC`
        }else if(bmi>=18.6 && bmi<24.9) {
            suggestion.textContent = ` YOU ARE FIT`
        }else{
            suggestion.textContent = `MOTE BKL`
        }
    }

});