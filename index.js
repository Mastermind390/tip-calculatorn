const amountInputEl = document.getElementById('amount-input');

const numberofPeopleEl = document.getElementById('people-input');

const amountEl = document.getElementById('tip-amount');

const totalAmountEl = document.getElementById('total-amount');

const errorMessage = document.getElementById('error-message');

const resetBtnEl = document.getElementById('reset-button');

function calculateTip(percentValue) {
    percent = percentValue / 100;
    console.log(percent)

    const amount = amountInputEl.value;
    const numberOfPeople = numberofPeopleEl.value;
    

    if (numberOfPeople === '') {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = "can't be empty";
        return
    } else if (numberOfPeople <= 0) {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = "can't be zero";
        return
    } else if (isNaN(numberOfPeople)) {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = "Must be number";
        return
    } else {
        errorMessage.style.visibility = 'hidden';
        errorMessage.innerHTML = "";
    }

    const tipAmount = (percent * amount).toFixed(2);

    const totalTipAmount = (tipAmount * numberOfPeople).toFixed(2);

    amountEl.innerHTML = `$${tipAmount}`;

    totalAmountEl.innerHTML = `$${totalTipAmount}`
    
}

const _5btnEl = document.getElementById('5').addEventListener('click', ()=>{
    calculateTip(5)
})

const _10btnEl = document.getElementById('10').addEventListener('click', ()=>{
    calculateTip(10)
})

const _15btnEl = document.getElementById('15').addEventListener('click', ()=>{
    calculateTip(15)
})

const _25btnEl = document.getElementById('25').addEventListener('click', ()=>{
    calculateTip(25)
})

const _50btnEl = document.getElementById('50').addEventListener('click', ()=>{
    calculateTip(50);
})

resetBtnEl.addEventListener('click', ()=>{
    amountInputEl.value = '';
    numberofPeopleEl.value = '';
    amountEl.innerHTML = `$0.00`;

    totalAmountEl.innerHTML = `$0.00`;

    const customInputEl = document.getElementById('custom-input');

    customInputEl.value = '';
})

const customInputEl = document.getElementById('custom-input').addEventListener('on', (event)=>{
    if (event.key === 'Enter') {
        fhugih();
    };
})

function fhugih() {
    const customInputEl = document.getElementById('custom-input');

   const customAmount = customInputEl.value;
   const amount = amountInputEl.value;
    const numberOfPeople = numberofPeopleEl.value;

   const percent = customAmount / 100;

    if (numberOfPeople === '') {
    errorMessage.style.visibility = 'visible';
    errorMessage.innerHTML = "can't be empty";
    return
    } else if (numberOfPeople <= 0) {
    errorMessage.style.visibility = 'visible';
    errorMessage.innerHTML = "can't be zero";
    return
    } else if (isNaN(numberOfPeople)) {
    errorMessage.style.visibility = 'visible';
    errorMessage.innerHTML = "Must be number";
    return
    } else {
    errorMessage.style.visibility = 'hidden';
    errorMessage.innerHTML = "";
    }

    const tipAmount = (percent * amount).toFixed(2);

    const totalTipAmount = (tipAmount * numberOfPeople).toFixed(2);

    amountEl.innerHTML = `$${tipAmount}`;

    totalAmountEl.innerHTML = `$${totalTipAmount}`


}


/////////////////////////----------------------->

const amountInputElD = document.getElementById('amount-inputD');


const numberofPeopleElD = document.getElementById('people-inputD');


const amountElD = document.getElementById('tip-amountD');


const totalAmountElD = document.getElementById('total-amount1D');


const errorMessageD = document.getElementById('error-messageD');


const resetBtnElD = document.getElementById('reset-buttonD');


function calculateTipD(percentValue) {
    percent = percentValue / 100;
    console.log(percent)

    const amount = amountInputElD.value;
    const numberOfPeople = numberofPeopleElD.value;
    console.log(amount)
    console.log(numberOfPeople)
    

    if (numberOfPeople === '') {
        errorMessageD.style.visibility = 'visible';
        errorMessageD.innerHTML = "can't be empty";
        return
    } else if (numberOfPeople <= 0) {
        errorMessageD.style.visibility = 'visible';
        errorMessageD.innerHTML = "can't be zero";
        return
    } else if (isNaN(numberOfPeople)) {
        errorMessageD.style.visibility = 'visible';
        errorMessageD.innerHTML = "Must be number";
        return
    } else {
        errorMessageD.style.visibility = 'hidden';
        errorMessageD.innerHTML = "";
    }

    const tipAmount = (percent * amount).toFixed(2);

    const totalTipAmount = (tipAmount * numberOfPeople).toFixed(2);

    amountElD.innerHTML = `$${tipAmount}`;

    totalAmountElD.innerHTML = `$${totalTipAmount}`
    
}

const _5btnElD = document.getElementById('5D').addEventListener('click', ()=>{
    calculateTipD(5)
})

const _10btnElD = document.getElementById('10D').addEventListener('click', ()=>{
    calculateTipD(10)
})

const _15btnElD = document.getElementById('15D').addEventListener('click', ()=>{
    calculateTipD(15)
})

const _25btnElD = document.getElementById('25D').addEventListener('click', ()=>{
    calculateTipD(25)
})

const _50btnElD = document.getElementById('50D').addEventListener('click', ()=>{
    calculateTipD(50);
})

resetBtnElD.addEventListener('click', ()=>{
    amountInputElD.value = '';
    numberofPeopleElD.value = '';
    amountElD.innerHTML = `$0.00`;

    totalAmountElD.innerHTML = `$0.00`;

    const customInputElD = document.getElementById('custom-inputD');

    customInputElD.value = '';
})

const customInputElD = document.getElementById('custom-inputD').addEventListener('onkeyup', (event)=>{
    if (event.key === 'Enter') {
        fhugihD();
    };
})

function fhugihD() {
    const customInputElD = document.getElementById('custom-inputD');

   const customAmount = customInputElD.value;
   const amount = amountInputElD.value;
    const numberOfPeople = numberofPeopleElD.value;

   const percent = customAmount / 100;

    if (numberOfPeople === '') {
    errorMessageD.style.visibility = 'visible';
    errorMessageD.innerHTML = "can't be empty";
    return
    } else if (numberOfPeople <= 0) {
    errorMessageD.style.visibility = 'visible';
    errorMessageD.innerHTML = "can't be zero";
    return
    } else if (isNaN(numberOfPeople)) {
    errorMessageD.style.visibility = 'visible';
    errorMessageD.innerHTML = "Must be number";
    return
    } else {
    errorMessageD.style.visibility = 'hidden';
    errorMessageD.innerHTML = "";
    }

    const tipAmount = (percent * amount).toFixed(2);

    const totalTipAmount = (tipAmount * numberOfPeople).toFixed(2);

    amountElD.innerHTML = `$${tipAmount}`;

    totalAmountElD.innerHTML = `$${totalTipAmount}`


}










