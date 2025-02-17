 figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });

function generateArt() {
    let text = document.getElementById("textInput").value;
    let font=document.getElementById("fontSelect").value;   //assigning  font style
    
        figlet.text(text, font, function (err, result) {
            if (err) {
                console.error("Figlet Error:", err);
                document.getElementById("asciiOutput").innerText = "Error generating ASCII art";
                return;
            }
            document.getElementById("asciiOutput").innerText = result; //  Display in HTML
        });
}
           function clearArt() {
            document.getElementById("asciiOutput").innerText = "";
            document.getElementById("textInput").value = "";
        }                   
                     //added copy function
        function copyToClipboard() {
        let asciiArt = document.getElementById("asciiOutput").innerText;
        if (!asciiArt.trim()) {
            alert("No ASCII art to copy!");
            return;
        }

        navigator.clipboard.writeText(asciiArt)
            .then(() => alert("Copied to clipboard!"))
            .catch(err => console.error("Failed to copy:", err));
    }
