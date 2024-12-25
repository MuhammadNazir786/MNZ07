import Logo1 from "../../../assets/images/Home1/logo1.svg";
import Logo2 from "../../../assets/images/Home1/logo2.svg";
import Logo3 from "../../../assets/images/Home1/logo3.svg";
import Logo4 from "../../../assets/images/Home1/logo4.svg";
import Logo5 from "../../../assets/images/Home1/logo5.svg";
import Logo6 from "../../../assets/images/Home1/logo6.svg";
import Marquee from "react-fast-marquee";

function Scrole() {
  return (
 <>
  <div className="bg-main-colo-3 py-10" data-aos="fade-up">
        <h1 className="text-center font-sans font-medium text-main-colo-1">
          Learn from 350+ leading universities and companies with us
        </h1>
        <Marquee speed={50} gradient={false} className="my-10">
          <div className="flex items-center justify-between gap-10">
            <img src={Logo1} alt="Logo 1" style={{ margin: "0 30px" }} />
            <img src={Logo2} alt="Logo 1" style={{ margin: "0 30px" }} />
            <img src={Logo3} alt="Logo 1" style={{ margin: "0 30px" }} />
            <img src={Logo4} alt="Logo 1" style={{ margin: "0 30px" }} />
            <img src={Logo5} alt="Logo 1" style={{ margin: "0 30px" }} />
            <img src={Logo6} alt="Logo 1" style={{ margin: "0 30px" }} />
          </div>
        </Marquee>
      </div>
 </>
  )
}

export default Scrole