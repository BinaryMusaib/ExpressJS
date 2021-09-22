const express = require('express')
const app = express()
const logger = require('./logger')
// We pass the middleware to the method
// order matters i.e It should execute all the methods underneath it
// In Express everything goes in order
app.use(logger)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})