import Dashboard from "./pages/Dashboard";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";



function App() {
  return (
    <>
        {/* <Header /> */}
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Dashboard />} />  
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>    
            </div>                
        </Router>

    </>

  );
}

export default App;
