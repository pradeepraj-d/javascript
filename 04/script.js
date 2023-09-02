const dobinp = document.getElementById("dob");
const btn = document.getElementById("claculate");
const epoch = new Date(0);
const epoch_year = epoch.getUTCFullYear();
const epoch_month = epoch.getUTCMonth();
const epoch_day = epoch.getUTCDate();
function calculateage() {
    const dob = new Date(dobinp.value);
    const diff = new Date(Date.now() - dob.getTime());
    var years = Math.abs(diff.getUTCFullYear() - epoch_year);
    var months = Math.abs(diff.getUTCMonth() - epoch_month);
    var days = Math.abs(diff.getUTCDate() - epoch_day);
    var result = document.getElementById("result");
    result.textContent = "Years: " + years +" Months: " + months +" Days: " + days  ;
}
