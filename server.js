const express = require('express')
const cors = require('cors')
const app = express()
const PORT = (8000)

app.use(cors())

const teams = {
    'bayern': {
    'teamName': 'FC Bayern Munich',
    'league': 'Bundesliga',
    'country': 'Germany',
    'nickname': 'The FCB'
    },
   'liverpool': {
    'teamName': 'Liverpool F.C.',
    'league': 'English Premier League',
    'country': 'England',
    'nickname': 'The Reds'
    },
    'juventus': {
    'teamName': 'Juventus',
    'league': 'Serie A',
    'country': 'Italy',
    'nickname': 'The Old Lady'
    },
    'barcelona': {
        'teamName': 'FC Barcelona',
        'league': 'La Liga',
        'country': 'Spain',
        'nickname': 'Barça'
    },
    'ajax': {
        'teamName': 'Amsterdamsche Football Club Ajax',
        'league': 'Eredivisie',
        'country': 'Netherlands',
        'nickname': 'Sons of the Gods'
    },
    'river': {
        'teamName': 'Club Atlético River Plate',
        'league': 'Primera División',
        'country': 'Argentina',
        'nickname': 'The Millionaires'
    },
    
    '': {
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