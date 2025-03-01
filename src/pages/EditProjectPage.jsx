import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import ProjectForm from "../components/ProjectForm";

const EditProjectsPage = (props) => {
  const [project, setProject] = useState({});

  const params = useParams();

  const getProject = async (id) => {
    const res = await fetch(`https://localhost:7211/api/projects/${id}`);
    const data = await res.json();

    setProject(data);
  };

  useEffect(() => {
    getProject(params.id);
  }, [params.id]);

  const saveProject = async () => {
    // SYNKA MED public class ProjectRegistrationForm i BACKEND
    const projectDTO = {
      projectName: project.projectName,
      customerId: project.customer.id,
      projectManagerId: project.projectManager.id,
      serviceTypeId: project.serviceType.id,
      statusTypeId: project.statusType.id,
      projectNoteId: project.projectNote.id,
      userId: project.user.id,
      projectScheduleId: project.projectSchedule.id,
    };

    const res = await fetch(
      `https://localhost:7211/api/projects/${project.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectDTO),
      }
    );

    if (res.ok) {
      alert("Project edited!");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <section className="container">
      <h1>Edit Project</h1>
      <ProjectForm
        project={project}
        setProject={setProject}
        saveProject={saveProject}
      />
    </section>
  );
};

export default EditProjectsPage;
