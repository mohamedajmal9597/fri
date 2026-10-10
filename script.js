document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.getElementById("loginPage");
    const questionPage = document.getElementById("questionPage");
    const loginForm = document.getElementById("loginForm");
    const nameInput = document.getElementById("nameInput");
    const greetingText = document.getElementById("greetingText");
    
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const result = document.getElementById("result");
    const resetBtn = document.getElementById("resetBtn");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        if (name !== "") {
            greetingText.textContent = `Hey, ${name}! 💕`;
            loginPage.classList.add("hidden");
            questionPage.classList.remove("hidden");
        }
    });

    yesBtn.addEventListener("click", () => {
        result.textContent = "Yayyy! 🥰💖 Best Friends Forever! 🫶";
    });

    function moveNoButton() {
        noBtn.style.position = "fixed";
        
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        
        const x = Math.random() * Math.max(0, maxX);
        const y = Math.random() * Math.max(0, maxY);
        
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }

    noBtn.addEventListener("mouseenter", moveNoButton);
    noBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        moveNoButton();
    }, { passive: false });
    
    noBtn.addEventListener("click", (e) => {
        e.preventDefault();
        moveNoButton();
    });

    resetBtn.addEventListener("click", () => {
        nameInput.value = "";
        result.textContent = "";
        noBtn.style.position = "relative";
        noBtn.style.left = "auto";
        noBtn.style.top = "auto";
        
        questionPage.classList.add("hidden");
        loginPage.classList.remove("hidden");
    });
});
