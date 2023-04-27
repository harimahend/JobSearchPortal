import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./imge/download.png";
import "./index.css"; // Import Tailwind styles

function Just() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("https://643aacc290cd4ba563fee2b3.mockapi.io/fetchdata")
      .then((response) => {
        if(localStorage.getItem("quickApply") === "Apply Now"){
          const applyNowJobs =response.data.filter(job => job.quickApply === "Apply Now");
          setJobs(applyNowJobs);
        }
        else{
          const applyNowJobs =response.data.filter(job => job.quickApply === "External Apply");
          setJobs(applyNowJobs);
        }
         
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  return (
    <div className="   mt-4 mr-6 mb-4 ml-6 ">
      <div className="grid grid-cols-2 gap-4 w-[830px] h-[320px]">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={` p-4 bg-gray-100 border rounded-md grid-row-${
              ((job.id - 1) % 2) + 1
            }`}
          >
            <div className="flex items-top mr-10  ">
              <img className="ml-1 mt-1 h-14 w-14" src={img1} alt="Logo" />
              <div className="text-left ml-4">
                <h2 className="text-2xl font-bold mb-1">{job.jobTitle}</h2>
                <div className="text-left ml-1">
                  <p>{job.companyName}</p>
                  <p>{job.location}</p>
                  <div className="h-6">&nbsp;</div>
                  <p>Part-Time&#40;9.00 am -5.00 pm IST&#41;</p>
                  <div className="h-2">&nbsp;</div>
                  <p>
                    {" "}
                    Experience&#40;{job.Experiencemin} -{job.Experiencemax}&#41;
                  </p>
                  <div className="h-2">&nbsp;</div>
                  <p>
                    INR &#40; ₹ &#41; {job.Salarymin} -{job.Salarymax}/Month
                  </p>
                  <div className="h-2">&nbsp;</div>
                  <p>{job.TotalEmployee}</p>
                  <div className="h-6">&nbsp;</div>
                  <div className="flex flex-wrap -mx-4">
                    <div className="  w-full md:w-1/2 px-4 mb-4">
                      <button className=" whitespace-nowrap mt-2  float-left bg-[#1597E4] text-white px-6 py-2 rounded  hover:bg-[#1597E4] w-[118px] h-[40px]">
                        Apply Now
                      </button>
                    </div>

                    <div className="  w-full md:w-1/2 px-4 mb-4">
                      <button className=" whitespace-nowrap mt-2 text-blue-600 border-blue-600 border-2 bg-white px-4 py-1.5  rounded hover:bg-blue-600 hover:text-white hover:border-white transition-colors duration-300 ">
                        External Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Just;
