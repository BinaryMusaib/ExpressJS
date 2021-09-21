const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/api/products/:productID', (req, res) => {
    //console.log(req.params);
    const { productID } = req.params
    const singleProduct = products.find( (product) => product.id === Number(productID) )
    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
        return res.json(singleProduct)
})

app.listen(5000, () => {
    console.log('server listening on port 5000...');
})