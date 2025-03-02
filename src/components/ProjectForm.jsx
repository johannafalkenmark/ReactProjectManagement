import React, { useEffect, useState } from "react";

//Denna komponent hämtar hem all data för mina projekt 
const ProjectForm = ({ project, setProject, saveProject }) => {
  const [customers, setCustomers] = useState([]);
  const [projectManagers, setProjectManagers] = useState([]);
  const [projectNotes, setProjectNotes] = useState([]);
  const [serviceTypes, setServiceTypes] = useState([]);
  const [statusTypes, setStatusTypes] = useState([]);
  const [projectSchedules, setProjectSchedules] = useState([]);
  const [users, setUsers] = useState([]);

  const getCustomers = async () => {
    const res = await fetch(`https://localhost:7211/api/customer`);
    const data = await res.json();
    setCustomers(data);
  };

  const getProjectManagers = async () => {
    const res = await fetch(`https://localhost:7211/api/projectmanager`);
    const data = await res.json();
    setProjectManagers(data);
  };

  const getProjectNotes = async () => {
    const res = await fetch(`https://localhost:7211/api/projectnote`);
    const data = await res.json();
    setProjectNotes(data);
  };

  const getServiceTypes = async () => {
    const res = await fetch(`https://localhost:7211/api/servicetype`);
    const data = await res.json();
    setServiceTypes(data);
  };

  const getStatusTypes = async () => {
    const res = await fetch(`https://localhost:7211/api/statustype`);
    const data = await res.json();
    setStatusTypes(data);
  };

  const getProjectSchedule = async () => {
    const res = await fetch(`https://localhost:7211/api/projectschedule`);
    const data = await res.json();
    setProjectSchedules(data);
  };

  const getUsers = async () => {
    const res = await fetch(`https://localhost:7211/api/user`);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getCustomers();
    getProjectManagers();
    getProjectNotes();
    getServiceTypes();
    getStatusTypes();
    getProjectSchedule();
    getUsers();
  }, []);

  if (!project.projectName) {
    // HÄR HANTERAR VI OM PROJEKTET INTE FINNS!
    return <p>Loading/No project exists</p>;
  }

  return (
    <div className="form">
      {/* NAMN */}
      <div className="form-row">
        <p>Project name</p>
        <input
          type="text"
          value={project.projectName}
          onChange={(e) => {
            setProject({ ...project, projectName: e.target.value });
          }}
        />
      </div>
      {/* PROJECT MANAGER */}
      <div className="form-row">
        <p>Project manager</p>
        <select
          type="text"
          value={project.projectManager.id}
          onChange={(e) => {
            const projectManager = projectManagers.find(
              (p) => p.id == e.target.value
            );

            setProject({ ...project, projectManager });
          }}
        >
          <option value="">-- Choose Project manager --</option>
          {projectManagers.map((data) => (
            <option key={data.id} value={data.id}>
              {data.firstName} {data.lastName}
            </option>
          ))}
        </select>
      </div>
      {/* CUSTOMER */}
      <div className="form-row">
        <p>Customer</p>
        <select
          type="text"
          value={project.customer.id}
          defaultValue={project.customer.id}
          onChange={(e) => {
            const customer = customers.find((p) => p.id == e.target.value);
            setProject({ ...project, customer });
          }}
        >
          <option value="">-- Choose Customer --</option>
          {customers.map((data) => (
            <option key={data.id} value={data.id}>
              {data.customerName}
            </option>
          ))}
        </select>
      </div>
      {/* USER */}
      <div className="form-row">
        <p>User</p>
        <select
          type="text"
          value={project.user.id}
          onChange={(e) => {
            const user = users.find((p) => p.id == e.target.value);

            setProject({ ...project, user });
          }}
        >
          <option value="">-- Choose User --</option>
          {users.map((data) => (
            <option key={data.id} value={data.id}>
              {data.email}
            </option>
          ))}
        </select>
      </div>
      {/* PROJECT NOTE */}
      <div className="form-row">
        <p>Project Note</p>
        <select
          type="text"
          value={project.projectNote.id}
          onChange={(e) => {
            const projectNote = projectNotes.find(
              (p) => p.id == e.target.value
            );

            setProject({ ...project, projectNote });
          }}
        >
          <option value="">-- Choose Project Note --</option>
          {projectNotes.map((data) => (
            <option key={data.id} value={data.id}>
              {data.notes}
            </option>
          ))}
        </select>
      </div>
      {/* SERVICE */}
      <div className="form-row">
        <p>Service type</p>
        <select
          type="text"
          value={project.serviceType.id}
          onChange={(e) => {
            const serviceType = serviceTypes.find(
              (p) => p.id == e.target.value
            );

            setProject({ ...project, serviceType });
          }}
        >
          <option value="">-- Choose Service Type --</option>
          {serviceTypes.map((data) => (
            <option key={data.id} value={data.id}>
              {data.typeName}
            </option>
          ))}
        </select>
      </div>
      {/* STATUS */}
      <div className="form-row">
        <p>Status type</p>
        <select
          type="text"
          value={project.statusType.id}
          onChange={(e) => {
            const statusType = statusTypes.find((p) => p.id == e.target.value);

            setProject({ ...project, statusType });
          }}
        >
          <option value="">-- Choose Status Type --</option>
          {statusTypes.map((data) => (
            <option key={data.id} value={data.id}>
              {data.typeName}
            </option>
          ))}
        </select>
      </div>
      {/* SCHEDULE */}
      <div className="form-row">
        <p>Schedule</p>
        <select
          type="text"
          value={project.projectSchedule.id}
          onChange={(e) => {
            const projectSchedule = projectSchedules.find(
              (p) => p.id == e.target.value
            );

            setProject({ ...project, projectSchedule });
          }}
        >
          <option value="">-- Choose Schedule --</option>
          {projectSchedules.map((data) => (
            <option key={data.id} value={data.id}>
              {data.startDate} - {data.endDate}
            </option>
          ))}
        </select>
      </div>
      <button onClick={saveProject}>Save</button>
    </div>
  );
};

export default ProjectForm;
