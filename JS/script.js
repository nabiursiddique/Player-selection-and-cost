//function for getting element from input field
function getInputFieldValue(idName) {
    const inputField = document.getElementById(idName);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}





//getting the information after clicking the submit button
const playerArray = [];

const tableBody = document.getElementById('players-list');



function addToPlayer(element) {
    // console.log(element.parentNode.children[0].innerText);
    const playerName = element.parentNode.children[0].innerText;
    playerArray.push(playerName);
    // console.log(playerArray);
    tableBody.innerHTML = "";
    for (let i = 0; i < playerArray.length; i++) {
        if (i > 4) {
            alert('You cannot add more than five player');
            break;
        }
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${playerArray[i]}</td>
        `;
        tableBody.appendChild(tr);
    }
}




//Player cost calculation
document.getElementById('player-cost-button').addEventListener('click', function () {
    //Getting the value of input field from player cost
    const playerCost = getInputFieldValue('player-input-field');
    if (playerArray.length <= 5) {
        const playerCostTotal = playerCost * playerArray.length;
        let totalPlayerCost = document.getElementById('player-cost-total');
        console.log(playerCostTotal);
        totalPlayerCost.innerText = playerCostTotal;
    }


});

//Manager and coach cost and player cost total
document.getElementById('total-calculation').addEventListener('click', function () {
    //for getting manager input field value
    const managerCost = getInputFieldValue('manager-field');

    //For getting coach input field value
    const coachCost = getInputFieldValue('coach-field');

    //Getting the value of total player cost
    const totalPlayerCostString = document.getElementById('player-cost-total');
    const totalPlayerInnerText = totalPlayerCostString.innerText;
    const playerCost = parseFloat(totalPlayerInnerText);

    //calculating total
    const totalCost = playerCost + managerCost + coachCost;
    const totalMoney = document.getElementById('total-money');
    totalMoney.innerText = totalCost;
});