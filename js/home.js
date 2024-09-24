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
        <p class= "text-xl text-gray-500>Date: ${new Date().toLocaleDateString()}</p>
        <p class= "text-xl text-gray-500 p-10">${inputAmount} Taka is Donate for Donate for flood at Noakhali, Bangladesh. </p>
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