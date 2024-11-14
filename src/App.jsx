import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path='/' element={<div>
          <h1 className="w-full h-screen flex items-center justify-center text-7xl font-bolder">eSales.pk</h1>
        </div>} />
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
