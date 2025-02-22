import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateProjectForm from "../components/CreateProjectForm_DELETE";

const CreateProjectPage = () => {
  //Förbereder för det som ska komma från databasen
  const [newProjectNumber, setNewProjectNumber] = useState();

  return (
    <>
      <CreateProjectForm />
    </>
  );
};

export default CreateProjectPage;
