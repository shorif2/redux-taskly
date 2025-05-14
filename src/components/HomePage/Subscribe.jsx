import React from "react";

const Subscribe = () => {
  return (
    <div className="container py-5 border-bottom ">
      <div className="p-5">
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <h1 className="features-heading text-center">Let's keep in touch</h1>
          <p className="fs-5  text-secondary text-center  w-50 pb-4">
            Subscirbe to keep up with fresh news and exciting updates. We
            promise not to spam you!
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center pb-5">
          <form className="d-flex justify-content-center align-items-center w-50  gap-3">
            <input
              className="col-8 py-2 px-3"
              type="search"
              placeholder="Enter your email address"
              aria-label="Search"
            />

            <button
              className="btn bg-secondary text-white fw-medium px-5 py-2 col-4 shadow-lg"
              type="submit"
            >
              SEND →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
