function generateArt() {
    let text = document.getElementById("textInput").value;
    
    // Issue: ASCII generation function is incorrect
    let asciiArt = text.split("").map(char => char.charCodeAt(0)).join(" ");
    
    document.getElementById("asciiOutput").innerText = asciiArt;
}

function clearArt() {

    document.getElementById("asciiOutput").innerText = "";
    document.getElementById("textInput").value="";
}
