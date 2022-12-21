
import { useState } from "react"
import "./App.css"
import Main from "./Main"
import Sidebar from "./Sidebar"

function App() {

  const [notes, setNotes] = useState([]);

  return <div className="App">
    <Sidebar notes= {notes} />
    <Main />
  </div>
}

export default App
