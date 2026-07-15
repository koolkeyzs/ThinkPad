const express = require('express')
const { getNotes, createNotes, updateNotes, deleteNotes, getNotesById } = require('../controllers/noteController')

const router = express.Router()


router.get('/' ,  getNotes)
router.get('/:id' ,  getNotesById)
router.post('/' , createNotes)
router.put('/:id' , updateNotes)
router.delete('/:id' , deleteNotes)








module.exports = router