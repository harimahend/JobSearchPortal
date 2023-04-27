import React from "react";

const JobListing3 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center mb-8">
       
       
        <h1 className="text-3xl font-bold">Developer</h1>
      </div>
      <div className="text-lg font-semibold mb-4">
        Great Vibes - Information technology
      </div>
      <div className="text-lg mb-4">
        Chennai, Tamilnadu, India (in-office)
      </div>
      <div className="text-lg mb-8">Part-Time (9.00 am - 5.00 pm IST)</div>
      <div className="text-lg mb-4">
      Experience(1-2 years)</div>
      <div className="text-lg mb-8">INR(₹)30,000-50,000/Month</div>
      <div className="text-lg mb-8">51-200 employees</div>
      <button className="bg-blue-600 text-white px-6 py-3 square-full hover:bg-blue-700">
        Apply now
      </button>
      <button className="bg-blue-600  text-blue px-6 py-3 square-full hover:bg-blue-700">
        External Apply
      </button>
    </div>
  );
};

export default JobListing3;
