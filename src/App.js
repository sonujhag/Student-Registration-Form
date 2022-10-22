import Form from './Form';
import Homepage from './Homepage';
import Update from './component/Update';
//[ ]{ } 
import {
  Routes,  
  Route 
} from "react-router-dom";
import Navbar from './Navbar';


function App() {

  return (
    <div className="App">
       {/* Applying routes */}
       <div style={{height:"0px",width:"10%",textAlign:"center"}}>
       <Navbar />
       </div>
       
          <Routes>
          <Route path="/"  element={<Homepage />} />
          <Route path="/update/:id"  element={<Update />} />      
          <Route path="/form" element={<Form   />} />           
          </Routes>
         
         
      </div>
    
    
  );
}

export default App;
