import React from "react";

const ProjectListItem = ({ project }) => {
  return (
    <div className="project">
      <div>{project.id}</div>
      <div>{project.projectName}</div>
      <div>{project.customerName}</div>
    </div>
  )
}

export default ProjectListItem;
