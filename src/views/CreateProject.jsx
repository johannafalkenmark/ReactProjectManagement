import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CreateProjectForm from '../components/CreateProjectForm';


const CreateProject = () => {

  //Förbereder för det som ska komma från databasen
  const [newProjectNumber, setNewProjectNumber] = useState();
  useEffect(() => {
    setNewProjectNumber(100)
  }, [])

  return (
    <>
      
         <CreateProjectForm />
      
    </>
  );
}

export default CreateProject