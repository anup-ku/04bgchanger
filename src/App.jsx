import { useState } from "react"

function App() {
  const [color, setColor]=useState("olive")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   >
    <div className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center
      gap-3 shadow-lg px-3 py-3 rounded-3xl">
        <button
        onClick={()=> setColor("Red")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-gl"
        style={{backgroundColor:"red"}}
        >RED</button>
        <button
        onClick={()=> setColor("Green")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-gl"
        style={{backgroundColor:"green"}}
        >GREEN</button>
        <button
        onClick={()=> setColor("Blue")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-gl"
        style={{backgroundColor:"blue"}}
        >BLUE</button>
         <button
        onClick={()=> setColor("Olive")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-gl"
        style={{backgroundColor:"olive"}}
        >OLIVE</button>
         <button
        onClick={()=> setColor("Gray")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-gl"
        style={{backgroundColor:"gray"}}
        >GRAY</button>
         <button
        onClick={()=> setColor("Yellow")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-gl"
        style={{backgroundColor:"yellow"}}
        >YELLOW</button>
         <button
        onClick={()=> setColor("Pink")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-gl"
        style={{backgroundColor:"pink"}}
        >PINK</button>
         <button
        onClick={()=> setColor("Purple")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-gl"
        style={{backgroundColor:"purple"}}
        >PURPLE</button>
         <button
        onClick={()=> setColor("Lavender")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-gl"
        style={{backgroundColor:"lavender"}}
        >LAVENDER</button>
         <button
        onClick={()=> setColor("white")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-gl"
        style={{backgroundColor:"white"}}
        >WHITE</button>
         <button
        onClick={()=> setColor("Black")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-gl"
        style={{backgroundColor:"black"}}
        >BLACK</button>
      </div>
    </div>
   </div>
  )
}

export default App
