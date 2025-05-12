// alert("Get your Result ");
function getInput() {
    let inputValue = document.getElementById("userInput").value;
    // console.log("Input value:", inputValue);
    getResult(inputValue);
}
function ResultCalculate(inputValue) {
    if (inputValue >= 80) {
        return "Congratulations✨🎉 You Got 'A+'";
    } else if (inputValue >= 70) {
        return "Congratulations✨ You Got 'A'";
    } else if (inputValue >= 60) {
        return "Congratulations✨ You Got 'A-'";
    } else if (inputValue >= 50) {
        return "You Got 'B'<br>Comment: You should work hard";
    } else if (inputValue >= 40) {
        return "You Got 'C'<br>Comment: You should work hard";
    } else if (inputValue >= 33) {
        return "You Got 'D'<br>Comment: You must improve your result";
    } else {
        return "You Got 'F'<br>Comment: Very Bad Luck.You are failed. Try again next time.";
    }
}
function getResult(inputValue) {
    document.getElementById("yourResult").innerHTML = '';
    
    let result = document.createElement("div");
    result.classList.add("result-card");
    
    result.innerHTML = `
        <h2>Your Result</h2>
        <div>${ResultCalculate(inputValue)}</div>
    `;
    
    document.getElementById("yourResult").appendChild(result);
    console.log("Result:", result);
}
