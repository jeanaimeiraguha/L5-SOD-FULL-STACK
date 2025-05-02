import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Insert from "./Insert";
import Select from "./Select";
import Delete from "./Delete";
import Update from "./Update";
// Import the Bootstrap CSS directly
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center mb-4 text-primary">React CRUD App</h2>
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-success" onClick={() => window.location.href = "/insert"}>Add New User</button>
          <button className="btn btn-info" onClick={() => window.location.href = "/select"}>View Users</button>
        </div>
        <div className="card p-4 shadow-sm rounded">
          <Routes>
            <Route path="/" element={<Insert />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/select" element={<Select />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/delete/:id" element={<Delete />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
