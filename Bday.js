
const button = document.getElementById("celebrateButton");
const audio = document.getElementById("celebrationSound");
const message = document.getElementById("Celebration");
const spider = document.getElementById("spiderHolder");
const string = document.getElementById("string");

let confettiInterval = null;

button.addEventListener("click", function () {
    // Play music
    audio.currentTime = 0;

    audio.play().catch(function (error) {
        console.log("Audio could not play:", error);
    });


    // Show birthday message
    message.classList.remove("show");
    void message.offsetWidth;
    message.classList.add("show");

// Restart the string and spider animations
string.classList.remove("grow");
spider.classList.remove("drop");

void string.offsetWidth;
void spider.offsetWidth;

string.classList.add("grow");
spider.classList.add("drop");
    // Start confetti only once
    if (confettiInterval !== null) return;

    confettiInterval = setInterval(function () {
        const colors = [
            "red", "blue", "yellow", "green",
            "pink", "purple", "orange"
        ];

        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");

            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];

            const size = Math.random() * 10 + 5;
            confetti.style.width = size + "px";
            confetti.style.height = size + "px";

            confetti.style.animationDuration =
                (Math.random() * 2 + 2) + "s";

            document.body.appendChild(confetti);

            setTimeout(function () {
                confetti.remove();
            }, 4500);
        }
    }, 300);
});
