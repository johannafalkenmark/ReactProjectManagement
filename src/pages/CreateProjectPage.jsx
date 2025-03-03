import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import ProjectForm from "../components/ProjectForm";

const CreateProjectPage = (props) => {
  const [project, setProject] = useState({
    projectName: "New project",
    customer: {},
    projectManager: {},
    serviceType: {},
    statusType: {},
    projectNote: {},
    user: {},
    projectSchedule: {},
  });

  const createProject = async () => {
    // SYNKAR MED public class ProjectRegistrationForm i BACKEND
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

    const res = await fetch(`https://localhost:7211/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectDTO),
    });

    if (res.ok) {
      alert("Project is created!");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <section className="container">
      <h1 className="headline">Create Project</h1>
      <ProjectForm
        project={project}
        setProject={setProject}
        saveProject={createProject}
      />
    </section>
  );
};

export default CreateProjectPage;
