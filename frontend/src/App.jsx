import axios from "axios";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Insert from "./Insert";
import Select from "./Select";
import Delete from "./Delete"
import{useNavigate} from 'react-router-dom'
import Update from "./Update";

const App = () => {
  return (
    
      <div>
      <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Insert />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/select" element={<Select />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
      </BrowserRouter>
      <h2>React CRud App</h2>
      </div>
   
  );
};

export default App;
