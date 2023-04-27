import React, { useEffect, useState } from 'react';
import Step1 from './Step1';
import Job from './Job';
import Just from './Just';

const FetchData = () => {
  const [step1Data, setStep1Data] = useState([]);
  const [JobData, setJobData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response1 = await fetch('api1/mockdata');
      const response2 = await fetch('api2/mockdata');

      const step1Data = await response1.json();
      const jobData = await response2.json();

      setStep1Data(step1Data);
      setJobData(jobData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Step1 step1Data={step1Data} />
      <Job jobData={jobData} />
      <Just step1Data={step1Data} jobData={jobData} />
    </div>
  );
};

export default FetchData;