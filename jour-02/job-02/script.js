let i = 0

function myAddCount() {
    i++
    let countDisp = document.getElementById('count-displayer') 
    countDisp.textContent = "Compteur du bouton : " + i;
}

let btn = document.getElementById('add-count-btn')
btn.addEventListener("click", myAddCount);