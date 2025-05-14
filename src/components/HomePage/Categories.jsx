import Card from "./Card";

const Categories = () => {
  return (
    <div className="py-5 px-3 container">
      <div className="w-100 d-flex flex-column justify-content-center align-items-center pb-5">
        <h1 className="features-heading text-center">Features</h1>
        <p className="fs-5 text-secondary text-center  w-50 ">
          Lightweight open source online project task management tool to help
          teams efficiently advance their projects .
        </p>
      </div>
      {/* cat 2 */}
      <div className="container pb-3">
        <div className="row gap-4 py-4">
          {/* cat-1 */}
          <div className="bg-light col d-flex p-5 gap-3 ">
            {/* img */}
            {/* categories-logo */}
            <div className="bg-white d-flex justify-content-center align-items-center p-3 categories-logo rounded">
              <img
                className=""
                src="/categories/docsStacked.avif"
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
          {/* cat-2 */}
          <div className="bg-light col d-flex p-5 gap-3">
            {/* img */}
            {/* categories-logo */}
            <div className="bg-white d-flex justify-content-center align-items-center p-3 categories-logo rounded">
              <img
                className=""
                src="/categories/bookFlat.avif"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="fs-4 fw-semibold">Wiki →</h3>
              <p className="fs-5 fw-medium pe-3 text-secondary">
                One Home base for all your knowledge.
              </p>
            </div>
          </div>
          {/* cat-3 */}
          <div className="bg-light col d-flex p-5 gap-3">
            {/* img */}
            {/* categories-logo */}
            <div className="bg-white d-flex justify-content-center align-items-center p-3 categories-logo rounded">
              <img
                className=""
                src="/categories/target.avif"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="fs-4 fw-semibold">Project →</h3>
              <p className="fs-5 fw-medium pe-3 text-secondary">
                Manage any project from beginning to end.
              </p>
            </div>
          </div>
          {/* cat-4 */}
          <div className="bg-light col d-flex p-5 gap-3">
            {/* img */}
            {/* categories-logo */}
            <div className="bg-white d-flex justify-content-center align-items-center p-3 categories-logo rounded">
              <img
                className=""
                src="/categories/notionCalendarLogo.avif"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="fs-4 fw-semibold">Notion AI →</h3>
              <p className="fs-5 fw-medium pe-3 text-secondary">
                Finds what you need. Does what you need.
              </p>
            </div>
          </div>
          {/* cat-5 */}
          <div className="bg-light col d-flex p-5 gap-3">
            {/* img */}
            {/* categories-logo */}
            <div className="bg-white d-flex justify-content-center align-items-center p-3 categories-logo rounded">
              <img
                className=""
                src="/categories/trophy.avif"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="fs-4 fw-semibold">Goal →</h3>
              <p className="fs-5 fw-medium pe-3 text-secondary">
                Track progress toward what's most important.
              </p>
            </div>
          </div>
          {/* cat-6 */}
          <div className="bg-light col d-flex p-5 gap-3">
            {/* img */}
            {/* categories-logo */}
            <div className="bg-white d-flex justify-content-center align-items-center p-3 categories-logo rounded">
              <img
                className=""
                src="/categories/target.avif"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="fs-4 fw-semibold">Sites →</h3>
              <p className="fs-5 fw-medium pe-3 text-secondary">
                Make any page a website in minutes
              </p>
            </div>
          </div>
          {/* cat-7 */}
          <div className="bg-light col col-4 d-flex p-5 gap-3">
            {/* img */}
            {/* categories-logo */}
            <div className="bg-white d-flex justify-content-center align-items-center p-3 categories-logo rounded">
              <img
                className=""
                src="/categories/shapes1.avif"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="fs-4 fw-semibold">Templates →</h3>
              <p className="fs-5 fw-medium pe-3 text-secondary">
                Get started with one of 30,000+ templates
              </p>
            </div>
          </div>
          {/* cat-8 */}
          <div className="bg-light col col-4 d-flex p-5 gap-3">
            {/* img */}
            {/* categories-logo */}
            <div className="bg-white d-flex justify-content-center align-items-center p-3 categories-logo rounded">
              <img
                className=""
                src="/categories/docsStacked.avif"
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
        </div>
      </div>
      {/* categories */}
    </div>
  );
};

export default Categories;
