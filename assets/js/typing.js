/**
* Typing Animation
**/
const spanElement = document.getElementById('typing');
const professions = ['Web designer..', 'Front-End developer..', 'UI/UX designer..'];
let currentProfessionIndex = 0;

function typeProfession() {
    const currentProfession = professions[currentProfessionIndex];
    let currentCharIndex = 0;

    function typeNextChar() {
        if (currentCharIndex < currentProfession.length) {
            spanElement.textContent = currentProfession.slice(0, currentCharIndex + 1);
            currentCharIndex++;
            setTimeout(typeNextChar, 100); // Adjust typing speed here
        } else {
            setTimeout(eraseProfession, 1000); // Delay before erasing
        }
    }

    function eraseProfession() {
        if (currentCharIndex >= 0) {
            spanElement.textContent = currentProfession.slice(0, currentCharIndex);
            currentCharIndex--;
            setTimeout(eraseProfession, 50); // Adjust erasing speed here
        } else {
            currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
            setTimeout(typeProfession, 500); // Delay before typing the next profession
        }
    }

    typeNextChar();
}

typeProfession();