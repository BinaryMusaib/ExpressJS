const express = require('express')
const path = require('path')
const app = express()

// We included all the files in the public folder
app.use(express.static('./public'))

app.all('*', (req, res) => {
    res.status(404).send('No page found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})
