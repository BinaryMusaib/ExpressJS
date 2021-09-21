const express = require('express')
const app = express()
// Importing products from "data.js"
const { products } = require('./data')

app.get('/', (req, res) => {
    // content type will be application/json
    res.json(products)
})
app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})