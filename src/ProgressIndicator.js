import React from 'react';
import JobsearchStep1 from './JobsearchStep1';
import JobsearchStep2 from './JobsearchStep2';

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
      {step === 1 && < JobsearchStep1 onNext={handleNext} />}
      {step === 2 && <JobsearchStep2 onSave={handleSave} />}
      {step === 3 && <JobDetails />}
    </div>
  );
}

export default ProgressIndicator;
