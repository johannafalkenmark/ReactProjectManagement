import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const CreateProject = () => {

  //Förbereder för det som ska komma från databasen
  const [newProjectNumber, setnewProjectNumber] = useState();
  useEffect(() => {
    setNewProjectNumber(100)
  }, [])

  return (
    <>
      <section className="section-title">
        <div className="container">
          <h1>Projekt {newProjectNumber} - Skapa nytt</h1>

          <nav>
            <Link className="btn btn-green" to="/projects/create">
              Skapa projekt
            </Link>
            <Link className="btn btn-blue" to="/projects">
              Visa lista
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}

export default CreateProject