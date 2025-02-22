import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectsPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import EditProjectPage from "./pages/EditProjectPage";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />

        <main>
          <Routes>
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/create-project" element={<CreateProjectPage />} />
            <Route path="/edit-project/:id" element={<EditProjectPage />} />
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
