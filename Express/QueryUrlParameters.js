const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.status(200).send('<h1> Home Page... </h1><a href="api/v1/query">Products</a>')
})

app.get('/api/products/:productID', (req, res) => {
    //console.log(req.params);
    const { productID } = req.params
    const singleProduct = products.find( (product) => product.id === Number(productID) )
    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
        return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    // [...products] object assigned => sortedProducts
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter( (product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit)) 
    }
    if(sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search')
        return res.status(200).json([{ success: true, data: [] }])
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
    console.log('server listening on port 5000...');
})