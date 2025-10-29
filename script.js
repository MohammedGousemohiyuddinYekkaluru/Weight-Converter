const weightInput = document.querySelector('.weight-input');
const inPounds = document.querySelector('.pounds');

weightInput.addEventListener('input', () => {
    const kg = parseFloat(weightInput.value);

    if(isNaN(kg)){
        inPounds.textContent = "Enter a valid number";
        return;
    }

        const pounds = kg * 2.20462;
        inPounds.textContent = `${pounds.toFixed(2)} lbs`; 
})