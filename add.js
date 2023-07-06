VANTA.NET({
  el: ".your-element-selector",
  color: 0x3fbdff,
  backgroundColor: 0xd0221,
  points: 9.00
})
// ^^^^Background^^^

const inputUserInfo = document.getElementById('inputInfo')
const btnAddGameToList = document.getElementById('addUserList')
const gameList = document.getElementById('list')

btnAddGameToList.onclick = function () {
    if (inputUserInfo.value === '') {
        return
    }
    const newGame = {
        call: inputUserInfo.value,
        completed: false,
    }
    games.push(newGame)
    render()
    inputUserInfo.value = ''
}

const games = [{
    call: 'CS16',
    completed: false,
}, {
    call: 'Dota2',
    completed: true,
}]

function render() {
    gameList.innerHTML = ''
    if (games.length === 0) {
        gameList.innerHTML = '<h5 class="text-light">Список пуст</h5>'
    }
    for(let i = 0; i < games.length; i++) {
        gameList.insertAdjacentHTML("beforeend", thisIsGameFormToList (games[i], i))
        console.log(games[i])
    }
    
}

render()



gameList.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'toggle'){
            games[index].completed = !games[index].completed
        } else if (type === 'remove') {
            console.log(games[index])
            games.splice(index, 1)
        }
    } 
    render()
}

function thisIsGameFormToList (game, index) {
    console.log(game, index)
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="${game.completed ? 'text-decoration-line-through' : ''}">${game.call}</span>
        <span>
            <span class="btn btn-small btn-${game.completed ? 'info' : 'outline-info'}" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-outline-danger" data-type="remove" data-index="${index}">&times;</span>
        </span>
    </li>`
}


