function checkVowels() {
    var text = document.getElementById("input").value;
    var l = text.length;
    var count = 0;
    text = text.toLocaleLowerCase();
    for (var i = 0; i < l; i++){
        if (isVowel(text.charAt(i))) {
            count++;
        }
    }
    var result = document.getElementById("result");
    result.textContent = "Total Vowels: " + count;
}

function isVowel(char) {
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}