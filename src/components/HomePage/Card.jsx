const Card = ({ iName }) => {
  return (
    <div className="bg-light col d-flex p-5 gap-3 ">
      {/* img */}
      {/* categories-logo */}
      <div className="bg-white d-flex justify-content-center align-items-center p-3 categories-logo rounded">
        <img
          className=""
          src={`/categories/${iName}.avif`}
          alt=""
          width={50}
          height={50}
        />
      </div>
      <div>
        <h3 className="fs-4 fw-semibold">Docs →</h3>
        <p className="fs-5 fw-medium pe-3 text-secondary">
          Build any page, communicaite any idea.
        </p>
      </div>
    </div>
  );
};

export default Card;
