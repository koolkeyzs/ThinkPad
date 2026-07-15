import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import RateLimitFlash from "../Components/rateLimiting";
import { Turtle } from "lucide-react";
import axios from 'axios'
import toast from "react-hot-toast";
import NoteCard from "../Components/NoteCard";
import api from "../../lib/axios";
import NoteNotFound from "../Components/NoteNotFound";



export default function HomePage() {
    const[isRateLimited , setIsRateLimited] = useState(false)
    const[notes , setNotes] = useState([])
    const[loading , setLoading] = useState(true)

    useEffect(()=> {
        const fetchNote = async ()=>{
      try {
        const res = await api.get('/notes')
        console.log(res.data)
        setNotes(res.data)
        setIsRateLimited(false)
      } catch (error) {
        console.log('Error fetching Notes')
        if(error.response.status === 429){
            setIsRateLimited(true)
        }else{
            toast.error('failed to load notes')
        }
      
        
      }
        finally {
            setLoading(false)
        }

        } 
        fetchNote()
    }, [])



    




  return (
    <div className="min-h-screen">
        <NavBar/>
      

       {isRateLimited && <RateLimitFlash/>}

       <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className="text-success text-center py-10 text-2xl z-60 animate-pulse">Loading Notes....</div>}

    {notes.length === 0 && !isRateLimited && !loading && <NoteNotFound/>}

         {notes.length > 0 && !isRateLimited && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
              {notes.map((note)=>(
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              ))}
            </div>
         )}
       </div>
    </div>
  ) 
}
