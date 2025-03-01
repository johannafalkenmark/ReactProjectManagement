import React from "react";
import { NavLink } from "react-router-dom";

const ProjectListItem = ({ project }) => {
  return (
    <div className="project-list-item">
      <div>
        <strong>Name of Project:</strong> {project.projectName}
      </div>
      <div>
        <strong>Project Manager:</strong> {project.projectManager.firstName}{" "}
        {project.projectManager.lastName}{" "}
      </div>
      <div>
        <strong>Customer:</strong> {project.customer.customerName}
      </div>
      <div>
        <strong>User email:</strong> {project.user.email}
      </div>
      <div>
        <strong>Project Note:</strong> {project.projectNote.notes}
      </div>
      <div>
        <strong>Service Type:</strong> {project.serviceType.typeName}
      </div>
      <div>
        <strong>Status Type:</strong> {project.statusType.typeName}
      </div>
      <div>
        <strong>Schedule:</strong> {project.projectSchedule.startDate}
        {" - "}
        {project.projectSchedule.endDate}
      </div>
      <NavLink to={`/edit-project/${project.id}`}>Edit Project</NavLink>
    </div>
  );
};

export default ProjectListItem;
