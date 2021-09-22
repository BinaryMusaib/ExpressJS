const express = require('express')
const app = express()
const logger = require('./logger')
// We pass the middleware to the method
// it will pass it to the urls i.e /api
// api/products
// api/items
app.use('/api', logger)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})