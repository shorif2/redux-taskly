import { CiFacebook, CiYoutube } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="container py-5 ">
      <div className="row">
        <div className="col-3">
          <h5>TASKLY</h5>
          <h6 className="fw-normal  w-100">
            Helps temas move projects forward effcienly and makes work easier.
          </h6>
        </div>
        {/* links */}
        <div className="col-7 d-flex justify-content-evenly ">
          {/* links1 */}
          <div className="">
            <h6 className="pb-2">Links</h6>
            <div className="d-flex flex-column gap-1">
              <h6 className="fw-normal">Product</h6>
              <h6 className="fw-normal">Solutions</h6>
              <h6 className="fw-normal">Pricing</h6>
              <h6 className="fw-normal">About us</h6>
            </div>
          </div>
          {/* links1 */}
          <div>
            <h6 className="pb-2">Support</h6>
            <div className="d-flex flex-column gap-1">
              <h6 className="fw-normal">Product</h6>
              <h6 className="fw-normal">Solutions</h6>
              <h6 className="fw-normal">Pricing</h6>
              <h6 className="fw-normal">About us</h6>
            </div>
          </div>
          {/* links1 */}
          <div>
            <h6 className="pb-2">Community</h6>
            <div className="d-flex flex-column gap-1">
              <h6 className="fw-normal">Product</h6>
              <h6 className="fw-normal">Solutions</h6>
              <h6 className="fw-normal">Pricing</h6>
              <h6 className="fw-normal">About us</h6>
            </div>
          </div>
        </div>
        {/* social icon */}
        <div className="col-2 d-flex flex-column justify-content-start ">
          <h6 className="pb-1">Follow Us</h6>
          <div className="d-flex  justify-content-start gap-3">
            <i class="bi bi-facebook fs-5 "></i>
            <i class="bi bi-youtube fs-5"></i>
            <i class="bi bi-twitter fs-5"></i>
            <i class="bi bi-linkedin fs-5"></i>
          </div>
        </div>
      </div>
      {/* logo section */}
    </div>
  );
};

export default Footer;
