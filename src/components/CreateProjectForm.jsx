import React, { useEffect, useState } from "react";

const CreateProjectForm = () => {
  const [customers, setCustomers] = useState([]);
  const [projectName, setProjectName] = UseState("");
  const [customerId, setCustomerId] = UseState("0");

  const getCustomers = async () => {
    const res = await fetch("https://localhost:7211/api/customers");
    const data = await res.json();

    setCustomers(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      projectName: projectName,
      customerId: parseInt(customerId),
    };

    

    const res = await fetch ("https://localhost:7211/api/customers", {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
    })

    console.log(res);
  };

  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <section className="section-create">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="customers">Customers</label>
            <select
              name="customers"
              id="customers"
              defaultValue={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            >
              <option disabled hidden value="0">
                Choose a customer
              </option>
              Customers
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.customerName}
                </option>
              ))}
            </select>
          </div>

          <button type="sumbit">Create</button>
        </form>
      </div>
    </section>
  );
};

export default CreateProjectForm;
