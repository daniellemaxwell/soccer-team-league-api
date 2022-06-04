const express = require('express')
const cors = require('cors')
const app = express()
const PORT = (8000)

app.use(cors())

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

app.use(express.static('./'))

app.get('/api/:teamName', (req, res) => {
    const name = req.params.teamName.toLowerCase()
        if(teams[name]){
            res.json(teams[name])
    }else{
        res.json(teams['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
})