const express = require('express')
const router = express.Router()

let { people, products } = require('../data')


router.get('/', (req, res) => {
    // Here data is the name of the file and people is an object in it.
    res.status(200).json( { success: true, data: people })
})
router.post('/', (req, res) => {
    const { name } = req.body
    if(!name) {
        return res
        .status(400)
        .json( {success: false, msg: 'please provide name value' })
    }
    res.status(201).json( {success: true, person: name })
})
// Post Method
router.post('/postman', (req, res) => {
    const { name } = req.body
    if(!name) {
        return res
        .status(400)
        .json( {success: false, msg: 'please provide name value' })
    }
    res.status(201).json( {success: true, data: [...people, name]})
})
// Put Method
router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find( (person) => person.id === Number(id))

    if(!person) {
        return res
        .status(400)
        .json( {success: false, msg: 'please provide name value' })
    }
    const newPeople = people.map( (person) => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json( { success: true, data: newPeople })
})
// Delete Method
router.delete('/:id', (req, res) => {
    const person = people.find( (person) => person.id === Number(req.params.id))
    if(!person){
        return res
        .status(404)
        .json({ success: false, msg: `No person with id ${req.params.id}` })
    }
    const newPeople = people.filter( 
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json( { success: true, data: newPeople })
})

module.exports = router