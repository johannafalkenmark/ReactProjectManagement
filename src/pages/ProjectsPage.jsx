import React, { useEffect, useState } from "react";
import ProjectListItem from "../components/ProjectListItem";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const res = await fetch("https://localhost:7211/api/projects");
    const data = await res.json();

    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="container">
      <h1 className="headline">Projects</h1>
      <div className="projects">
        {projects.map((project) => (
          <ProjectListItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
