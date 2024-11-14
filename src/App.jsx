import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home  from './Pages/Home'
import  Page1  from './Pages/Page1'
import Archive from './Pages/Archive'
import Form1 from './Pages/Form1'
import CustomCursor from './Components/CustomCursor'
import CursorTrail from './Components/CursorTrail'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Forminit from './Pages/Forminit'

function App() {


  return (

    <div>     <CustomCursor/>  <CursorTrail/> 
<BrowserRouter>
     <Routes>  

        
       <Route index element= {<Home/>} /> 
       <Route path = "/Home" element= {<Home />} /> 
       <Route path = "/Page1" element= {<Page1 />} /> 
       <Route path = "/Archive" element= {<Archive />} /> 
       <Route path = "/Form1" element= {<Form1 />} /> 
       <Route path = "/Page2" element= {<Page2 />} /> 
       <Route path = "/Page3" element= {<Page3 />} /> 
       <Route path = "/Forminit" element= {<Forminit />} /> 
       

      


     </Routes>

</BrowserRouter>
</div>
  )
}

export default App
