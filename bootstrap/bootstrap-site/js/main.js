document.getElementById("showMoreButton").addEventListener("click", function() {
    var additionalText = document.getElementById("additionalText");
    if (additionalText.style.display === "none") {
            additionalText.style.display = "block";
            this.textContent = "Show less";
        } else {
            additionalText.style.display = "none";
            this.textContent = "Read more";
        }
    });
