import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Read from "./components/Read";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
