import React, { useEffect, useState } from "react";
import ProjectListItem from "../components/ProjectListItem";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const res = await fetch("https://localhost:7211/api/projects");

    try {
      if (res.ok === true) {
        const data = await res.json();
        setProjects(data);
      }
      //Felhantering ifall anropet misslyckas:
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const onDelete = async (id) => {
    // RADERA PROJEKT
    const res = await fetch(`https://localhost:7211/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const newProjects = projects.filter((project) => project.id !== id);
      setProjects(newProjects);

      alert("Project is deleted!");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <section className="container">
      <h1 className="headline">Projects</h1>
      <div className="projects">
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            project={project}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
