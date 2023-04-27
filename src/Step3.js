import React from 'react';
import Step1 from './Step1';
import Job from './Job';
import Just from './Just';
function Step3() {
  const [step, setStep] = React.useState(1);
  
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleSave = () => {
    setStep(step + 1);
  };
 
 

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Job onSave={handleSave} />}
      {step === 3 && <Just />}
    </div>
  );
}

export default Step3;
