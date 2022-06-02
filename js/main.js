document.querySelector('#clickHere').addEventListener('click', makeReq)

async function makeReq() {
    const teamName = document.querySelector("#soccerTeam").value
    const res = await fetch(`/api/${teamName}`)
    const data = await res.json()

    console.log(data)
    document.querySelector('#teamName').textContent = data.teamName
    document.querySelector('#teamLeague').textContent = data.league
    document.querySelector('#teamLocation').textContent = data.country
}

