const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~\`|}{[]:;?><,./-=";

const length = document.getElementById("length");
const uppercase = document.getElementById("upper");
const lowercase = document.getElementById("lower");
const numbercount = document.getElementById("number");
const symbolcount = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
const output = document.getElementById("password");

generatebtn.addEventListener("click", function () {
    const l = length.value;
    let characters = "";
    let password = "";
    if (lowercase.checked) {
        characters += lower;
    }
    if (uppercase.checked) {
        characters += upper;
    }
    if (numbercount.checked) {
        characters += numbers;
    }
    if (symbolcount.checked) {
        characters += symbols;
    }

    for (let i = 0; i < l; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    output.value = password;
})