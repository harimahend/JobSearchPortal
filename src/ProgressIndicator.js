import React from 'react';
import JobsSearchStep1 from './JobsSearchStep1';
import JobsSearchStep2 from './JobsSearchStep2';

import JobDetails from './JobDetails';

function ProgressIndicator() {
  const [step, setStep] = React.useState(1);
  
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleSave = () => {
    setStep(step + 1);
  };
 
 

  return (
    <div>
      {step === 1 && < JobsSearchStep1 onNext={handleNext} />}
      {step === 2 && <JobsSearchStep2 onSave={handleSave} />}
      {step === 3 && <JobDetails />}
    </div>
  );
}

export default ProgressIndicator;
