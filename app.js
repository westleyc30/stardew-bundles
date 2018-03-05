const express = require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey' })
})

app.set('port', process.env.PORT || '3000')
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`)
})
