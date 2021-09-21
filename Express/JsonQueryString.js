const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1>')
})
// we are using query string to map specific items
// instead of sending all the data, we send
// just 3 attributes
app.get('/api/products', (req, res) => {
    const newProducts = products.map( (product) => {
        const { id, name, image } = product
        return { id, name, image }
     })
     res.json(newProducts)
})
// Here we selected just one item with id === 1 
// and displayed it

app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find( (product) => product.id === 1)

    res.json(singleProduct)
})
app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})