function generateArt() {
    let text = document.getElementById("textInput").value;
    
    // Issue: ASCII generation function is incorrect
    let asciiArt = text.split("").map(char => char.charCodeAt(0)).join(" ");
    
    document.getElementById("asciiOutput").innerText = asciiArt;
}

function clearArt() {
    // Issue: Does not clear input field properly
    document.getElementById("asciiOutput").innerText = "";
}
