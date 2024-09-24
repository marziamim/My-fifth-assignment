// common share fuction

function getInputFieldValueById(id){
    const inputValue =parseFloat(document.getElementById(id).value);
    return inputValue;
}
function getInputFieldInnerTextById(id){
    const inputInnerText = parseFloat(document.getElementById(id).innerText);
    return inputInnerText;
}

// noakhali donation section
document.getElementById('donation-noakhali')
.addEventListener('click', function(){
    const inputAmount = getInputFieldValueById('input-amount')

    if (inputAmount <= 0 || isNaN(inputAmount)){
        alert ('Ivalid Donation Amount')
    }else {
        const donateAmount = getInputFieldInnerTextById('donate-amount')
    const reserveAmount = getInputFieldInnerTextById('reserve-amount')
 
     const newDonateAmount = donateAmount + inputAmount;
     const newReserveAmount = reserveAmount - inputAmount;
 
     document.getElementById('donate-amount').innerText = newDonateAmount;
     document.getElementById('reserve-amount').innerText = newReserveAmount;
     
     my_modal_1.showModal()

    }
    //  history
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-2 border-solid";
    historyItem.innerHTML = `
        <p class= "text-xl text-gray-500 p-3">Date: ${new Date()}</p>
        <p class= "text-xl font-semibold text-black-100 p-3">${inputAmount} Taka is Donate for Donate for flood at Noakhali, Bangladesh. </p>
    `
const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem, historyContainer.firstChild); 
})

// feni donation section
document.getElementById('donation-feni')
.addEventListener('click', function(){
    const inputAmountFeni = getInputFieldValueById('input-amount-feni')

    if(inputAmountFeni <=0 || isNaN(inputAmountFeni)){
        alert ('Ivalid Donation Amount')  
    }else{

        const donateAmountFeni = getInputFieldInnerTextById('donate-amount-feni')
        const reserveAmount = getInputFieldInnerTextById('reserve-amount')

        const newDonateAmountFeni = donateAmountFeni + inputAmountFeni;
        const newReserveAmount = reserveAmount - inputAmountFeni;

        document.getElementById('donate-amount-feni').innerText = newDonateAmountFeni;
        document.getElementById('reserve-amount').innerText = newReserveAmount;

        my_modal_1.showModal()
    }

    // history
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-2 border-solid";
    historyItem.innerHTML = `
    <p class= "text-xl text-gray-500 p-3">Date: ${new Date()}</p>
    <p class= "text-xl font-semibold text-black-100 p-3">${inputAmountFeni} Taka is Donate for Donate for flood at Feni, Bangladesh. </p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild); 

})

// quota movement section
document.getElementById('donation-quota-movement')
.addEventListener('click', function(){
    const inputAmountMovement = getInputFieldValueById('input-amount-movement')

    if(inputAmountMovement <=0 || isNaN(inputAmountMovement)){
        alert ('Ivalid Donation Amount')  
    }else{

        const donateAmountMovement = getInputFieldInnerTextById('donate-amount-movement')
        const reserveAmount = getInputFieldInnerTextById('reserve-amount')

        const newDonateAmountMovement = donateAmountMovement + inputAmountMovement;
        const newReserveAmount = reserveAmount - inputAmountMovement;

        document.getElementById('donate-amount-movement').innerText = newDonateAmountMovement;
        document.getElementById('reserve-amount').innerText = newReserveAmount;

        my_modal_1.showModal()
    }

    // history
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-2 border-solid";
    historyItem.innerHTML = `
    <p class= "text-xl text-gray-500 p-3">Date: ${new Date()}</p>
    <p class= "text-xl font-semibold text-black-100 p-3">${inputAmountMovement} Taka is Donate for Donate for Quota Movement Bangladesh. </p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild); 

})


// history functionality
const historyTab = document.getElementById('history-tab')
const donationTab = document.getElementById('donation-tab')
// history tab
historyTab.addEventListener('click', function(){

    historyTab.classList.add('bg-primary');
    historyTab.classList.remove('bg-gray-200');
    
    donationTab.classList.remove('bg-primary');
    donationTab.classList.add('bg-gray-200');

document.getElementById('card-section').classList.add("hidden"); 
document.getElementById('history-section').classList.remove("hidden");   
})
// donation tab
donationTab.addEventListener('click', function(){

    donationTab.classList.add('bg-primary');
    donationTab.classList.remove('bg-gray-200');

    historyTab.classList.remove('bg-primary')
    historyTab.classList.add('bg-gray-200')

    document.getElementById('history-section').classList.add("hidden"); 
    document.getElementById('card-section').classList.remove("hidden");
})