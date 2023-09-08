function Maturity(){
    const principle = parseFloat(document.getElementById('principle').value);
    const intrest = parseFloat(document.getElementById('intrest').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    const result = principle + (principle * intrest * tenure) / 100;

    document.getElementById('result').innerText = `Maturity Amount: ${result.toFixed(2)}`;
}

document.getElementById('calcbtn').addEventListener('click', Maturity);