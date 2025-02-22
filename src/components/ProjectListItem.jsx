import React from "react";
import { NavLink } from "react-router-dom";

const ProjectListItem = ({ project }) => {
  return (
    <div className="project-list-item">
      <div>
        <strong>Namn:</strong> {project.projectName}
      </div>
      <div>
        <strong>Projekt ansvarig:</strong> {project.projectManager.firstName}{" "}
        {project.projectManager.lastName}{" "}
      </div>
      <div>
        <strong>Kund:</strong> {project.customer.customerName}
      </div>
      <div>
        <strong>Användare epost:</strong> {project.user.email}
      </div>
      <div>
        <strong>Notering:</strong> {project.projectNote.notes}
      </div>
      <div>
        <strong>Service typ:</strong> {project.serviceType.typeName}
      </div>
      <div>
        <strong>Status typ:</strong> {project.statusType.typeName}
      </div>
      <div>
        <strong>Schema:</strong> {project.projectSchedule.startDate}
        {" - "}
        {project.projectSchedule.endDate}
      </div>
      <NavLink to={`/edit-project/${project.id}`}>Redigera projekt</NavLink>
    </div>
  );
};

export default ProjectListItem;
