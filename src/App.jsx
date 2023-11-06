import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import CadastroP from "./CadastroP.jsx";

function App() {
  return (
  <div>
    <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/login" element={<Login/>}/>
 <Route path="/CadastroP" element={<CadastroP/>}/>
 </Routes>
 </BrowserRouter>
    
  </div>
    )
}

export default App