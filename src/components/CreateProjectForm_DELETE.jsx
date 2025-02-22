import React, { useEffect, useState } from "react";

const CreateProjectForm = () => {
  const [customers, setCustomers] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [customerId, setCustomerId] = useState("0");

  const getCustomers = async () => {
    try {
      const res = await fetch("https://localhost:7211/api/customer");
      const data = await res.json();

      setCustomers(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        projectName: projectName,
        customerId: parseInt(customerId),
      };

      const res = await fetch("https://localhost:7211/api/projects", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(res);
    } catch (e) {
      console.error(e);
    }
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
                  {customer.customerType}
                </option>
              ))}
            </select>
          </div>

          <button type="sumbit" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateProjectForm;
