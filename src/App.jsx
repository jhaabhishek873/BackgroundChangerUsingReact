import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="rounded-full outline-none px-4 py-2 text-white shadow-lg"
          style={{backgroundColor: "red"}}
          onClick={()=>setColor("red")}
          >Red</button>
          <button className="rounded-full outline-none px-4 py-2 text-white shadow-lg"
          style={{backgroundColor: "green"}}
          onClick={()=>setColor("green")}
          >Green</button>
          <button className="rounded-full outline-none px-4 py-2 text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          onClick={()=>setColor("blue")}
          >Blue</button>
          <button className="rounded-full outline-none px-4 py-2 text-white shadow-lg"
          style={{backgroundColor: "brown"}}
          onClick={()=>setColor("brown")}
          >Brown</button>
          <button className="rounded-full outline-none px-4 py-2 text-white shadow-lg"
          style={{backgroundColor: "skyblue"}}
          onClick={()=>setColor("skyblue")}
          >Skyblue</button>
          <button className="rounded-full outline-none px-4 py-2 text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          onClick={()=>setColor("yellow")}
          >Yellow</button>
          <button className="rounded-full outline-none px-4 py-2 text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          onClick={()=>setColor("orange")}
          >Orange</button>
          <button className="rounded-full outline-none px-4 py-2 text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          onClick={()=>setColor("olive")}
          >default</button>
        </div>
      </div>

    </div>
  )
}

export default App
