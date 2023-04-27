import React, { useState } from 'react';



const Step1=(props)=>{

        const [jobTitle, setJobTitle] = useState("");
        const [companyName, setCompanyName] = useState("");
        const [industry, setIndustry] = useState("");
        const [location, setLocation] = useState("");
        const [remoteType,setRemoteType]= useState("");
    
        const handleJobTitleChange = (event) => {
            setJobTitle(event.target.value);
        };

        const handleCompanyNameChange = (event) => {
            setCompanyName(event.target.value);
        };

        const handleIndustryChange = (event) => {
            setIndustry(event.target.value);
        };

        const handleLocationChange = (event) => {
            setLocation(event.target.value);
        };
        const handleremoteTypeChange =(event)=>{
            setRemoteType(event.target.value);
        }
        const handleNextClick = () => {
          props.onNext();
        
       
          localStorage.setItem('jobTitle',jobTitle);
          localStorage.setItem('companyName',companyName);
          localStorage.setItem('industry',industry);
          localStorage.setItem('location',location);
          localStorage.setItem('remoteType',remoteType);
               
        };
       
   
    return(
      
        <div className="   mt-8 mr-8 mb-8 ml-8 w-[577px] h-[564px]">
      {/* Step 1 label */}
      <p className=" float-right text-secondary font-medium">Step 1</p>
      
          <label className="text-left  font-bold block mb-2" htmlFor="location">
            Create a job.
          </label> 
      {/* Form fields */}
      <div className='w-6'>&nbsp;</div>

        
        
          <label className="  text-left  font-medium block mb-2 " htmlFor="job-title">
          <div class="relative">
  
  
  Job Title
  <span class="text-red-500">*</span>
</div>

               
          </label>
          <div className='h-1'>&nbsp;</div>
          <input required 
           
            className="appearance-none border rounded-md p-2 w-full border border-secondary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:border-primary"
            id="job-title"
            type="text"
            placeholder="ex. UX UI Designer" value={jobTitle} onChange={handleJobTitleChange}
          />
       <div className='w-6'>&nbsp;</div>
        <div className="  mb-4">
          <label className="text-left font-medium block mb-2" htmlFor="company-name">
            Company Name
            <span class="text-red-500">*</span>
          </label>
          <div className='h-1'>&nbsp;</div>
          <input required="true"
            className="appearance-none border border-secondary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:border-primary"
            id="company-name"
            type="text"
            placeholder="ex. Google" value={companyName} onChange={handleCompanyNameChange}
          />
        </div>
        <div className='w-6'>&nbsp;</div>
        <div className="mb-4">
          <label className="text-left font-medium block mb-2" htmlFor="industry">
            Industry
            <span class="text-red-500">*</span>
          </label>
          <div className='h-1'>&nbsp;</div>
          <input
            className="appearance-none border border-secondary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:border-primary"
            id="industry"
            type="text"
            placeholder="ex. Information Technology" value={industry} onChange={handleIndustryChange}
          />
        </div>
        <div className='w-6'>&nbsp;</div>
        <div className='h-1'>&nbsp;</div>
        <div className="flex flex-wrap -mx-4">
        <div className=" w-full md:w-1/2 px-4 mb-4">
          <label className="text-left font-medium block mb-2" htmlFor="location">
            Location
          </label>
          <div className='h-1'>&nbsp;</div>
          <input
            className="appearance-none border border-secondary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:border-primary"
            id="location"
            type="text"
            placeholder="ex. Chennai" value={location} onChange={handleLocationChange}
          />
        </div>
        <div className='w-6'>&nbsp;</div>
        <div className="  w-full md:w-1/2 px-4 mb-4">
          <label className="text-left font-medium block mb-2" htmlFor="remote-type">
            Remote Type
          </label>
          <div className='h-1'>&nbsp;</div>
          <input
            className="appearance-none border border-secondary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:border-primary"
            id="remote-type"
            type="text"
            placeholder="Enter remote type" value={remoteType} onChange= {handleremoteTypeChange}
          />
        </div>
</div>
        {/* Next button */}

      <div className="float-right text-secondary font-medium">
     <button class="text-secondary  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 roundedfloat-right text-secondary font-medium" 
      onClick={handleNextClick}>
         Next
     </button>
     </div>
     
     
     </div>
     
    );
}

export default Step1;

