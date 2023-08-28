import React, { useState } from 'react';
import './FormStyles.css';

const BasicForm = () => {
  return (
    <div className="blue-container">
      <form className="basic-form" autoComplete="off">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" />
      </form>
    </div>
  );
};

function Form() {
  const [view, setView] = useState("basic");

  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          className={view === "basic" ? "active" : ""}
        >
          Basic
        </h3>
        {/* Add more navigation options here */}
      </nav>

      {/* Render the selected view */}
      <div className="page-container">
        {view === "basic" && <BasicForm />}
        {/* Render other views here based on the selected option */}
      </div>
    </div>
  );
}

export default Form;
