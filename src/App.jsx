import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Login from "./pages/Login"
import Registrar from "./pages/Registrar"
import Home from "./pages/Home"

import "./App.css"



const App = () =>{
  return(
    <Router>
      <div className="containerApp">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registrar" element={<Registrar/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  )
}


export default App