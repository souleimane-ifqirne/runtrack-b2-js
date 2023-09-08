class Board {
    constructor(){
        this.grid = ""
        this.hasWinner = ""
    }

    initializeBoard() {
        const BoardBody = document.getElementById('board')
        this.grid = document.createElement('td')
        this.grid.className = 'boxBoard';
        this.grid.textContent = ''
        BoardBody.appendChild(this.grid)
        this.hasWinner = false
    }

    
}