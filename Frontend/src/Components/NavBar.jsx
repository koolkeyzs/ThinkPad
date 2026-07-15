import { Link } from "react-router-dom"
import { useState } from "react"
import {Plus , NotebookPen } from "lucide-react"


const NavBar = () => {
  
  return (
    <header className="bg-base-300 border-b border-base-content/10">
    <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

      <h1 className="text-4xl text-success flex font-bold">
       <NotebookPen size={40} />
         ThinkPad
      </h1>

      <Link to='/create' className="text-1xl font-bold btn btn-success text-dark m-2">
        <Plus size={20}/>
         <span>New Note</span>
      </Link>

        </div>
    </div>
    </header>
  )
}

export default NavBar