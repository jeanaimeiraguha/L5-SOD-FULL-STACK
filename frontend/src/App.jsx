import axios from "axios";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Insert from "./Insert";
import Select from "./Select";
import Delete from "./Delete";
// import{useNavigate} from 'react-router-dom'
// import Update from "./Update";

const App = () => {
  return (
    
      <div>
        <h2>Welcome TO my React App</h2>
        <Insert/>
        <Select/>
      </div>
   
  );
};

export default App;
