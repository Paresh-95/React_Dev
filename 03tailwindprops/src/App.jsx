import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-5' >Tailwind Test </h1>
      <Card username='Alice John' text = "How are you" link="https://images.pexels.com/photos/19952458/pexels-photo-19952458/free-photo-of-encontro-tematico-cor-pessego.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Card username='Paresh' text = "Fuck Off" btnText= "open me " link = "https://images.pexels.com/photos/19952291/pexels-photo-19952291/free-photo-of-woman-in-wedding-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
    </>
  )
}

export default App
