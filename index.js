const express = require('express')
const app = express()
const port = 3002
const bodyParser = require('body-parser')
const path = require('path')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(
    '/javascripts',
    express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist'))
)

app.get('/', (req, res) => res.render('index', {
        url: 'index',
        data: 'test'
    }
))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
