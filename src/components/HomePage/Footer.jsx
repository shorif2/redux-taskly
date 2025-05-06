import { CiFacebook, CiYoutube } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="d-flex w-100  container py-5 ">
      {/* logo section */}
      <div className="w-25">
        <h5>TASKLY</h5>
        <h6 className="fw-normal  w-100">
          Helps temas move projects forward effcienly and makes work easier.
        </h6>
      </div>
      {/* links */}
      <div className="w-50  d-flex justify-content-evenly ">
        {/* links1 */}
        <div className="">
          <h6>Links</h6>
          <div>
            <div>
              <h6 className="fw-normal">Product</h6>
              <h6 className="fw-normal">Solutions</h6>
              <h6 className="fw-normal">Pricing</h6>
              <h6 className="fw-normal">About us</h6>
            </div>
          </div>
        </div>
        {/* links1 */}
        <div className="">
          <h6>Support</h6>
          <div>
            <div>
              <h6 className="fw-normal">Product</h6>
              <h6 className="fw-normal">Solutions</h6>
              <h6 className="fw-normal">Pricing</h6>
              <h6 className="fw-normal">About us</h6>
            </div>
          </div>
        </div>
        {/* links1 */}
        <div className="">
          <h6>Community</h6>
          <div>
            <h6 className="fw-normal">Product</h6>
            <h6 className="fw-normal">Solutions</h6>
            <h6 className="fw-normal">Pricing</h6>
            <h6 className="fw-normal">About us</h6>
          </div>
        </div>
      </div>
      {/* social icon */}
      <div className="d-flex justify-content-start w-25 ">
        <CiFacebook size={28} />
        <TiSocialTwitterCircular size={28} />
        <TiSocialLinkedinCircular size={28} />
        <CiYoutube size={28} />
      </div>
    </div>
  );
};

export default Footer;
