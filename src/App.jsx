import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Projects from "./views/Projects";
import CreateProject from "./views/CreateProject";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />

        <main>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/create" element={<CreateProject />} />

            <Route path="/" element={<CreateProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
