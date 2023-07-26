import "./App.css";
import { BrowserRouter, Routes, Routes } from "react-router-dom";
import { Header } from "./Common/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
