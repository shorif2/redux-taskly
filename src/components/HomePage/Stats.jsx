import React from "react";

const Stats = () => {
  return (
    <div className="bg-light ">
      <div className="container d-flex flex-column justify-items-center align-items-center py-5">
        <h1 className="features-heading text-center">Why Taskly</h1>
        <p className="fs-5 fw-medium text-secondary text-center  w-50 pb-3">
          Taskly increases employee productivity and customer satisfaction,
          according to IDC
        </p>
        <div className="w-100 d-flex flex-row justify-content-between py-3">
          <div>
            <h2>54%</h2>
            <p className="fs-5 text-secondary">
              faster execution of business processes
            </p>
          </div>
          <div>
            <h2>41%</h2>
            <p className="fs-5 text-secondary">
              more business processes completed
            </p>
          </div>
          <div>
            <h2>82%</h2>
            <p className="fs-5 text-secondary">
              improvement in employee satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
