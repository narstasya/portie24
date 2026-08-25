document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("subtitle").classList.add("hidden"); 
    document.getElementById("startButton").classList.add("hidden"); 
    document.getElementById("options").classList.remove("hidden"); 
});

const potatoOptions = {
    "Baked Potatoes": { 
        time: 3600, 
        img: "https://raw.githubusercontent.com/hbk-bs/the-archives-narstasya/refs/heads/main/assets/images/interaction/baked_potato_cropped.png", 
        quote: "Patience... baked potatoes are worth it!" 
    },
    "Mashed Potatoes": { 
        time: 1200, 
        img: "https://raw.githubusercontent.com/hbk-bs/the-archives-narstasya/refs/heads/main/assets/images/interaction/mashed_potatoes_cropped.png", 
        quote: "Keep mashing, keep believing." 
    },
    "Boiled Potatoes": { 
        time: 1500, 
        img: "https://raw.githubusercontent.com/hbk-bs/the-archives-narstasya/refs/heads/main/assets/images/interaction/boiled_potatoes_cropped.png", 
        quote: "Boiling... just like your hunger." 
    },
    "French Fries": { 
        time: 900, 
        img: "https://raw.githubusercontent.com/hbk-bs/the-archives-narstasya/refs/heads/main/assets/images/interaction/french-fries_cropped.png", 
        quote: "Crispy goodness is on its way!" 
    }
};


let countdown;

document.querySelectorAll(".choice").forEach(choice => {
    choice.addEventListener("click", function() {
        let selectedType = this.getAttribute("data-type");
        let selectedTime = parseInt(this.getAttribute("data-time"));

        document.getElementById("options").classList.add("hidden"); 
        document.getElementById("timerSection").classList.remove("hidden"); 

        // H1 stays the same
        document.getElementById("foodImage").src = potatoOptions[selectedType].img; 
        document.getElementById("cookingQuote").innerText = potatoOptions[selectedType].quote; 

        let timeLeft = selectedTime;

        function updateTimer() {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            document.getElementById("timerDisplay").innerText = `Time Left: ${minutes}:${seconds.toString().padStart(2, '0')}`;
            if (timeLeft > 0) {
                timeLeft--;
                countdown = setTimeout(updateTimer, 1000);
            } else {
                document.getElementById("timerDisplay").innerText = "DING DING! Your potatoes are READY!";
                document.getElementById("cookingQuote").innerText = "Go eat before they get cold!";
            }
        }
        updateTimer();
    });
});

// Go Back button functionality
document.getElementById("goBackButton").addEventListener("click", function() {
    clearTimeout(countdown);
    document.getElementById("timerSection").classList.add("hidden"); 
    document.getElementById("options").classList.remove("hidden"); 
});
