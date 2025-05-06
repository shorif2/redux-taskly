const Categories = () => {
  return (
    <div className="py-5 px-3 container">
      <h1 className="w-50  pb-5 features-heading">
        Everything you need to do your best work
      </h1>
      {/* categories */}
      <div className="d-flex gap-2">
        <div className="w-25">
          <img
            className=""
            src="/categories/docsStacked.avif"
            alt=""
            width={80}
            height={80}
          />
          <h3 className="pt-2 fs-4 fw-semibold">Docs →</h3>
          <p className="fs-5 fw-medium pe-4 text-secondary">
            Build any page, communicaite any idea.
          </p>
        </div>
        <div className="w-25">
          <img
            className=""
            src="/categories/bookFlat.avif"
            alt=""
            width={80}
            height={80}
          />
          <h3 className="pt-2 fs-4 fw-semibold">Wiki →</h3>
          <p className="fs-5 fw-medium pe-4 text-secondary">
            One Home base for all your knowledge.
          </p>
        </div>
        <div className="w-25">
          <img
            className=""
            src="/categories/target.avif"
            alt=""
            width={80}
            height={80}
          />
          <h3 className="pt-2 fs-4 fw-semibold ">Project →</h3>
          <p className="fs-5 fw-medium pe-4 text-secondary">
            Manage any project from beginning to end.
          </p>
        </div>
        <div className="w-25">
          <img
            className=""
            src="/categories/notionCalendarLogo.avif"
            alt=""
            width={80}
            height={80}
          />
          <h3 className="pt-2 fs-4 fw-semibold">Notion AI →</h3>
          <p className="fs-5 fw-medium pe-4 text-secondary">
            Finds what you need. Does what you need.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center items-center gap-2 pt-4">
        <div className="w-25">
          <img
            className=""
            src="/categories/notionCalendarLogo.avif"
            alt=""
            width={80}
            height={80}
          />
          <h3 className="pt-2 fs-4 fw-semibold">Calendar →</h3>
          <p className="fs-5 fw-medium pe-4">
            See all your commitments in one place.
          </p>
        </div>
        <div className="w-25">
          <img
            className=""
            src="/categories/trophy.avif"
            alt=""
            width={80}
            height={80}
          />
          <h3 className="pt-2 fs-4 fw-semibold">Goals →</h3>
          <p className="fs-5 fw-medium pe-4">
            Track progress toward what's most important.
          </p>
        </div>
        <div className="w-25">
          <img
            className=""
            src="/categories/target.avif"
            alt=""
            width={80}
            height={80}
          />
          <h3 className="pt-2 fs-4 fw-semibold">Sites →</h3>
          <p className="fs-5 fw-medium pe-4">
            Make any page a website in minutes
          </p>
        </div>
        <div className="w-25">
          <img
            className=""
            src="/categories/shapes1.avif"
            alt=""
            width={80}
            height={80}
          />
          <h3 className="pt-2 fs-4 fw-semibold">Templates →</h3>
          <p className="fs-5 fw-medium pe-4">
            Get started with one of 30,000+ templates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
