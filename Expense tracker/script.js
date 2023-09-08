const balance = document.querySelector("#balance");
const income = document.querySelector("#inc");
const expense = document.querySelector("#exp");
const description = document.querySelector("#desc");
const amount = document.querySelector("#amt");
const trans = document.querySelector("#trans");
const form = document.querySelector("#form-element");

// const dummy = [
//     {id: 1, description: "salary", amount:35000},
//     {id: 2, description: "food", amount:-120},
//     {id: 3, description: "grocery", amount:-2000},
//     {id: 4, description: "rent", amount:-8000},
//     {id: 5, description: "Petrol", amount:-500},
// ];

const local = JSON.parse(localStorage.getItem("trans"));

let transactions = localStorage.getItem("trans") != null ? local : [ ];

function load_transactions(transaction) {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(transaction.amount > 0 ? "inc" : "exp");
    item.innerHTML = `
        ${transaction.description}
        <span>${sign} ${Math.abs(transaction.amount)}</span>
        <button class="del-btn" onclick="remove_trans(${transaction.id})">x</button>
    `;
    trans.appendChild(item);
};
function remove_trans(id) {
    if (confirm("Are you sure you wnat to delete this transaction?")) {
        transactions = transactions.filter((transaction) => transaction.id != id);
        config();
        updateLocalStorage();
    }
    else {
        return;
    }
};

function updateBalance() {
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    balance.innerHTML = `₹ ${total}`;

    const net_income = amounts.filter((item) => item > 0).reduce((acc,item) => (acc += item),0).toFixed(2);
    income.innerHTML = `₹ ${net_income}`;

    const net_expense = amounts.filter((item) => item < 0).reduce((acc,item) => (acc += item),0).toFixed(2);
    expense.innerHTML = `₹ ${Math.abs(net_expense)}`;
};  

function config() {
    trans.innerHTML = "";
    transactions.forEach(load_transactions);
    updateBalance();
};

window.addEventListener("load", function () {
    config();
});

function addtransaction(e) {
    e.preventDefault();
    const input_data = {
        id: uniqueID(),
        description: description.value,
        amount: +amt.value,
    };
    transactions.push(input_data);
    config();
    updateLocalStorage();
};
function uniqueID() {
    return Math.floor(Math.random() * 1000);
}
form.addEventListener("submit", addtransaction);

function updateLocalStorage() {
    localStorage.setItem("trans", JSON.stringify(transactions));
};