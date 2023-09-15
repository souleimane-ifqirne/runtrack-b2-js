const displayText = document.getElementById('display-text');
const inputText = document.getElementById('text-input');
const turnTextBoldBtn = document.getElementById('turn-text-bold');
const turnTextItalicBtn = document.getElementById('turn-text-italic');
const eraseTextBtn = document.getElementById('erase-text');

function DisplayText() {
    const inputValue = inputText.value;
    displayText.textContent = inputValue;
}

function TurnBold() {
    displayText.style.fontWeight = 'bold';
}

function TurnItalic() {
    displayText.style.fontStyle = 'italic';
}

function ClearText() {
    displayText.style.fontWeight = 'normal'; 
    displayText.style.fontStyle = 'normal'; 
}

textInput.addEventListener('input', DisplayText);
turnTextBoldBtn.addEventListener('click', TurnBold);
turnTextItalicBtn.addEventListener('click', TurnItalic);
eraseTextBtn.addEventListener('click', ClearText);
