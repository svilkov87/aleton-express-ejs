const express = require('express')
const config = require('./config')
const app = express()
const port = 3002
const bodyParser = require('body-parser')
const path = require('path')
const staticAsset = require('static-asset')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(staticAsset(path.join(__dirname, 'public')))
app.use('*/images', express.static(path.join(__dirname, 'public/images')))
app.use(
    '/javascripts',
    express.static(path.join(__dirname, 'public/javascripts'))
)
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', (req, res) => res.render('index', {
        url: 'index',
        data: 'test'
    }
))

app.get('/patent', (req, res) => res.render('patent', {
        url: 'patent',
        data: 'patent'
    }
))
app.get('/rvp', (req, res) => res.render('rvp', {
        url: 'rvp',
        data: 'rvp'
    }
))

app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`))


