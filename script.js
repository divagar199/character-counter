const inputField = document.getElementById('messageInput');
const counterDisplay = document.getElementById('charCounter');
const warningDisplay = document.getElementById('warningText');
const maxChars = 200;

inputField.addEventListener('input', updateCounter);
function updateCounter() {
    const currentLength = inputField.value.length;
    counterDisplay.textContent = `${currentLength} / ${maxChars} characters`;
    if (currentLength >= maxChars) {
        warningDisplay.classList.add('visible');
        inputField.classList.add('limit-reached');
    } else {
        warningDisplay.classList.remove('visible');
        inputField.classList.remove('limit-reached');
    }
}