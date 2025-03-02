import React from "react";
import { NavLink } from "react-router-dom";

const ProjectListItem = ({ project, onDelete }) => {
  return (
    <div className="project-list-item">
      <div>
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
      </div>
      <div className="project-list-item-btn-container">
        <NavLink className="edit-link" to={`/edit-project/${project.id}`}>
          Edit Project
        </NavLink>

        <button className="btn-delete" onClick={() => onDelete(project.id)}>
          <i className="bi bi-trash3-fill"> </i>
        </button>
      </div>
    </div>
  );
};

export default ProjectListItem;
