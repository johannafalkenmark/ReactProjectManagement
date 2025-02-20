import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import CreateProject from "./views/CreateProject";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectPage from "./views/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />

        <main>
          <Routes>
            <Route path="/projects/create" element={<CreateProject />} />
            <Route path="/projects" element={<ProjectPage />} />

            {/* //Listar projekt (tillfällig): */}
            <Route path="/" element={<ProjectPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
