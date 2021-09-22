const express = require('express')
const app = express()

// req => middleware => res
// Express send req, res to the logger under the hood
// next is used for continuing
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // We have to invoke next 
    // i.e send it to the next middleware
    next()
}

app.get('/', logger, (req, res) => {
    res.send('Home Page')
})

app.get('/about', logger, (req, res) => {
    res.send('About Page')
})
app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})