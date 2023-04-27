import React, { useState } from "react";
import "./App.css";

const Job = (props) => {
  const [Experiencemin, setExperiencemin] = useState("");
  const [Experiencemax, setExperiencemax] = useState("");
  const [Salarymin, setSalarymin] = useState("");
  const [Salarymax, setSalarymax] = useState("");
  const [TotalEmployee, setTotalEmployee] = useState("");
  const [quickApply, setQuickApply] = useState("");

  const handleExperienceminChange = (event) => {
    setExperiencemin(event.target.value);
  };
  const handleExperiencemaxChange = (event) => {
    setExperiencemax(event.target.value);
  };

  const handleSalaryminChange = (event) => {
    setSalarymin(event.target.value);
  };
  const handleSalarymaxChange = (event) => {
    setSalarymax(event.target.value);
  };

  const handleTotalEmployeeChange = (event) => {
    setTotalEmployee(event.target.value);
  };
 const handleExternalApplyClick =(event)=> {
    setQuickApply(event.target.defaultValue);
    console.log("I am working from external apply:"+event.target.defaultValue)
  }

  const handleApplyNowClick=(event)=> {
    setQuickApply(event.target.defaultValue);
    console.log("I am working from apply now :"+event.target.defaultValue)
  }

  
 
    

  const handleSaveClick = () => {
    props.onSave();
    const data = {
      jobTitle: localStorage.getItem("jobTitle"),
      companyName: localStorage.getItem("companyName"),
      industry: localStorage.getItem("industry"),
      location: localStorage.getItem("location"),
      remoteType: localStorage.getItem("remoteType"),
      Experiencemin: Experiencemin,
      Experiencemax: Experiencemax,
      Salarymin: Salarymin,
      Salarymax: Salarymax,
      TotalEmployee: TotalEmployee,
      quickApply : quickApply,
    };
    
    localStorage.setItem("quickApply", quickApply);

   
    fetch("https://643aacc290cd4ba563fee2b3.mockapi.io/fetchdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

     

    return (
      <form onSubmit={handleSaveClick}>
        <div>
          <label htmlFor="job-title">Experience</label>
          <input
            id="experiencemin"
            type="text"
            value={Experiencemin}
            onChange={handleExperienceminChange}
          />
        </div>
        <div>
          <input
            id="experiencemax"
            type="text"
            value={Experiencemax}
            onChange={handleExperiencemaxChange}
          />
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            id="salarymin"
            type="text"
            value={Salarymin}
            onChange={handleSalaryminChange}
          />
        </div>
        <div>
          <input
            id="salarymax"
            type="text"
            value={Salarymax}
            onChange={handleSalarymaxChange}
          />
        </div>
        <div>
          <label htmlFor="total-employee">TotalEmployee:</label>
          <input
            id="total-employee"
            type="text"
            value={TotalEmployee}
            onChange={handleTotalEmployeeChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <div className=" mt-8 mr-8 mb-8 ml-8 w-[577px] h-[564px]">
      {/* Step 1 label */}
      <p className="float-right text-secondary font-medium">Step 2</p>
      <div className="mb-4">
        <label className="text-left font-bold block mb-2" htmlFor="location">
          Create a Job
        </label>
        <div className="w-6">&nbsp;</div>
      </div>
      {/* Form fields */}

      <div className="mb-4">
        <label
          className="text-left font-medium block mb-2 "
          htmlFor="job-title"
        >
          Experience
        </label>
        <div className="h-1">&nbsp;</div>
        <div className="flex flex-wrap -mx-4">
          <div className="  w-full md:w-1/2 px-4 mb-4">
            <input
              className="appearance-none border rounded-md p-2 w-full border border-secondary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:border-primary"
              id="job-title"
              type="text"
              placeholder="Minimum"
              value={Experiencemin}
              onChange={handleExperienceminChange}
            />
          </div>
          <div className=" w-full md:w-1/2 px-4 mb-4">
            <input
              className="appearance-none border rounded-md p-2 w-full border border-secondary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:border-primary"
              id="job-title"
              type="text"
              placeholder="Maximum"
              value={Experiencemax}
              onChange={handleExperiencemaxChange}
            />
          </div>
        </div>
        <div className="w-6">&nbsp;</div>
        <div className="mb-4">
          <label
            className="text-left font-medium block mb-2"
            htmlFor="company-name"
          >
            Salary
          </label>
          <div className="h-1">&nbsp;</div>
          <div className="flex flex-wrap -mx-4">
            <div className=" w-full md:w-1/2 px-4 mb-4">
              <input
                className=" mr-6 appearance-none border border-secondary rounded w-full py-2 px-3  text-secondary leading-tight focus:outline-none focus:border-primary"
                id="company-name"
                type="text"
                placeholder="Minimum"
                value={Salarymin}
                onChange={handleSalaryminChange}
              />
            </div>

            <div className=" w-full md:w-1/2 px-4 mb-4">
              <input
                className="appearance-none border rounded-md p-2 w-full border border-secondary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:border-primary"
                id="job-title"
                type="text"
                placeholder="Maximum"
                value={Salarymax}
                onChange={handleSalarymaxChange}
              />
            </div>
          </div>
        </div>
        <div className="w-6">&nbsp;</div>
        <div className="mb-4">
          <label
            className="text-left font-medium block mb-2"
            htmlFor="industry"
          >
            Total employee
          </label>
          <div className="h-1">&nbsp;</div>
          <input
            className="appearance-none border border-secondary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:border-primary"
            id="industry"
            type="text"
            placeholder="ex. 100"
            value={TotalEmployee}
            onChange={handleTotalEmployeeChange}
          />
        </div>
        <div className="w-6">&nbsp;</div>
        <div className="mb-4">
          <label
            className="text-left font-medium block mb-2"
            htmlFor="location"
          >
            Apply type
          </label>
          <div className="h-1">&nbsp;</div>
          <div className="flex flex-wrap -mx-4">
            <div className=" w-full md:w-1/2 px-4 mb-4">
              <div class="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="Apply Now"
                  name="default-radio" onChange={handleApplyNowClick}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                      <button >Quick Apply</button>
                </label>
              </div>
            </div>
            <div className=" w-full md:w-1/2 px-4 mb-4">
              <div class="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value="External Apply" onChange={handleExternalApplyClick}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                      <button  >External Apply</button> 
                 </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-right text-secondary font-medium">
        <button
          class=" 	text-secondary bg-[#1597E4] hover:bg-[#1597E4] text-white font-bold py-2 px-4 rounded"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Job;
