const Note = require('../model/Schema')


module.exports.getNotes = async (req , res)=>{
  try{
     const notes = await Note.find().sort({createdAt:-1})
     res.status(200).json(notes)
  }catch(error){
    console.error('error in gettingNoteController' , error)
    res.status(500).json({message: 'internal error'})
  }
   
}

module.exports.createNotes = async (req , res)=>{
   try{
    const{title , content} = req.body
    const note = new Note({title , content})
    const savedNote = await note.save()
      res.status(201).json({savedNote})
   

   }catch(error){
console.error('error in createNoteController' , error)
  res.status(500).json({message: 'internal error'})
   }
}


module.exports.updateNotes = async (req, res, next) => {
    try {
        const {id} = req.params
        const {title, content} = req.body
        
        const note = await Note.findById(id)
        if(!note) {
            return res.status(404).json({message: 'Note not found'})
        }
        
        const updatedNote = await Note.findByIdAndUpdate(
            id, 
            {title, content},
            {new: true}
        )
        
        res.status(200).json(updatedNote)
        
    } catch(error) {
        console.error('Error updating note:', error)
        res.status(500).json({
            message: 'Failed to update note',
            error: error.message
        })
    }
}

module.exports.deleteNotes = async (req , res)=>{
  try{
  const{id} = req.params
  const note = await Note.findById(id)
if(!note){
    return res.status(404).json({message: 'NOT FOUND'})
}

await Note.findByIdAndDelete(id)
 return res.status(200).json({message:'Succesfully deleted note'})


  } catch(error){
    console.error('Error updating note:', error)
        res.status(500).json({
            message: 'Failed to delete note',
            error: error.message
        })

  }
}


module.exports.getNotesById= async (req , res)=>{
  try{
  const{id} = req.params
  const note = await Note.findById(id)
if(!note){
    return res.status(404).json({message: 'Not does not exist'})
}

res.status(200).json(note)

  } catch(error){
    console.error('Error finding note:', error)
        res.status(500).json({
            message: 'Failed to fetch note',
            error: error.message
        })

  }
}