'use strict';
console.log(document.querySelector('.js-button').classList.contains('js-button'));


function buttonElement(selector) {
    const elementButton = document.querySelector(selector);
    if (!elementButton.classList.contains('is-toggled')) {
        elementButton.classList.add('is-toggled');
        // document.body.style.backgroundColor = '#34ff20';
    } else {
        elementButton.classList.remove('is-toggled');
        // document.body.style.backgroundColor = '#000';
    }
}






// function toggleButton(value) {
//     const toggleElement = document.querySelector(value);
//     if (!toggleElement.classList.contains('is-toggled')) {
//         turnOffPreviousButton();
//         toggleElement.classList.add('is-toggled')
//     } else {
//         toggleElement.classList.remove('is-toggled')
//     }
// }
function toggleButton(value) {
    const toggleElement = document.querySelector(value)
    if (!toggleElement.classList.contains('is-toggled')) {
        console.log('I am exhausted')
        turnOffPreviousButton();
        toggleElement.classList.add('is-toggled')
    } else {
        toggleElement.classList.remove('is-toggled')
    }
}
 function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled')
    if(previousButton) {
        previousButton.classList.remove('is-toggled')
    }
 }


 function calculateTotal() {
    const inputElement = document.querySelector('.inputCost');
 //    inputElement.classList.add('style');

    let cost = Number(inputElement.value);
    
    if (cost < 40) {
     cost = Number(cost) + 10;
    } else if (cost > 0) {
        document.querySelector.classList.add()
    }

    document.querySelector('.js-total').innerHTML = `$${cost}`;
 }

 function handleCostkeydown(event) {
    console.log(event);
    if (event.key === 'Enter') {
        calculateTotal();
    }
 }


