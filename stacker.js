function setPlayer(event) {
    event.preventDefault()
    let form = event.target

    console.log(form.playerName.value + " is now the current Player's Name")
    let playerName = form.playerName.value

    document.getElementById("nameArea").classList.remove("hidden")
    document.getElementById("changePlayerButton").classList.remove("hidden")
    document.getElementById("gameSpace").classList.remove("hidden")
    document.getElementById("nameSpace").innerHTML = playerName
    form.reset()
    form.classList.add("hidden")
}