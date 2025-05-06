import React from "react";

const Banner = () => {
  return (
    <div className="bg-light">
      <div className="d-flex flex-column align-items-center gap-3 pt-5 vh-75 banner-container container ">
        <div className="text-center banner-h1 pb-2">
          Simplify task management and prioritize work
        </div>
        <p className="fs-5 w-50  text-center fw-medium">
          Asana is the leading software for project management, according to
          G2¹. See all your work in one place so you can prioritize what matters
          most.
        </p>
        <div className="d-flex gap-3">
          <button className="px-4 py-2 fs-5 bg-black text-white rounded-pill ">
            Get started
          </button>
          <button className="px-4 py-2 fs-5   rounded-pill">
            Request a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
