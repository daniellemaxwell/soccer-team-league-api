const express = require('express')
const app = express()
const PORT = (8000)

const teams = {
    'bayern': {
    'teamName': 'FC Bayern Munich',
    'league': 'Bundesliga',
    'country': 'Germany'
    },
   'liverpool': {
    'teamName': 'Liverpool F.C.',
    'league': 'English Premier League',
    'country': 'England'
    },
    'juventus': {
    'teamName': 'Juventus',
    'league': 'Serie A',
    'country': 'Italy'
    },
    'unknown': {
        'teamName': 'Unknown',
        'league': 'Unknown',
        'country': 'Unknown'
        },
}

/* app.set('view engine', 'ejs', (req, res) =>{
    res.render(view, locals)
}) */

app.use(express.static('./'))

app.get('/api/:teamName', (req, res) => {
    const name = req.params.teamName.toLowerCase()
        if(teams[name]){
            res.json(teams[name])
    }else{
        res.json(teams['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}.`)
})