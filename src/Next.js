import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from './imge/download.png'
import './index.css'; // Import Tailwind styles

function Next (){
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get('https://641adf4b9b82ded29d43dae0.mockapi.io/api/createjob')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (

    <div>
     
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <div class="grid grid-cols-2 gap-4 ">
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-top  ">
  <img className="ml-1 mt-1 h-14 w-14" src={img1} alt="Logo" />
  <div className="text-left ml-4">
    <h2 className="text-2xl font-bold mb-1">{job.jobTitle}</h2>
    <div className="text-left ml-1">
      <p>{job.companyName}</p>
      <p>{job.industry}</p>
      <p>{job.location}</p>
      <p>{job.remoteType}</p>
      <button className=" mt-4  float-left bg-blue-600 text-white px-6 py-2 rounded  hover:bg-blue-700">
        Apply now
      </button>  &nbsp;&nbsp;&nbsp;
      <button className="mt-4 text-blue-600 border-blue-600 border-2 bg-white px-4 py-1.5  rounded hover:bg-blue-600 hover:text-white hover:border-white transition-colors duration-300">
        External Apply
      </button>
      
    </div>
  </div>
</div>

</div>
</div>

                 </li>
          
        ))}
      </ul>
     
    </div>
  
  );



        }
        export default Next;