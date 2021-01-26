function setPlayer(event) {
    event.preventDefault()
    let form = event.target

    console.log(form.playerName.value + " is now the current Player's Name")
    let playerName = form.playerName.value

    currentPlayer = players.find(player => player.name == playerName)

    if (!currentPlayer) {
        currentPlayer = {
            name: playerName,
            topScore: 0
        }
        players.push(currentPlayer)
        savePlayers()
    }

    console.log(currentPlayer)
    form.reset()
    document.getElementById("game").classList.remove("hidden")
    form.classList.add("hidden")
    draw()
    drawScoreboard()
}