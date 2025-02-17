import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import CreateProject from "./views/CreateProject";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import ListProject from "./views/ListProject";

function App() {
  useEffect(() => {
    fetch("https://localhost:7211/api/customer").then((data) => {
      console.log(data.json());
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />

        <main>
          <Routes>
            <Route path="/projects/create" element={<CreateProject />} />
            <Route path="/projects" element={<ListProject />} />


{/* //Listar projekt (tillfällig): */}
            <Route path="/" element={<ListProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
