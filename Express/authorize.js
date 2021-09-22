const authorize = (req, res, next) => {
    const { user } = req.query
    if( user === 'samar') {
        req.user = { name: 'samar', id: 4}
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize