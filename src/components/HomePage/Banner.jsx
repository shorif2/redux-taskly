import React from "react";

const Banner = () => {
  return (
    <div className="bg-light">
      <div className="pt-5">
        <div className="d-flex flex-column align-items-center gap-3 pt-5  vh-75em banner-container container ">
          <h1 className="text-center banner-h1 ">
            Simplify task management and prioritize work
          </h1>
          <p className="fs-5 w-50 text-secondary  text-center px-5 pb-4">
            Asana is the leading software for project management, according to
            G2¹. See all your work in one place so you can prioritize what
            matters most.
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <button className="px-4 py-2 fs-6 bg-black text-white rounded-pill fw-medium">
              Get started
            </button>
            <button className="px-4 py-2 fs-6 fw-medium  rounded-pill">
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
