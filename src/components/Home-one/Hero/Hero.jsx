import heroGirl from "../../../assets/images/Home1/hero-girl.webp";
import student from "../../../assets/images/Home1/hero-student.avif";
import chat from "../../../assets/images/Home1/hero-chat.webp";
import ball from "../../../assets/images/Home1/orange-ball.svg";
import circle from "../../../assets/images/Home1/primary-circle.svg";


function Hero() {
  return (
    <>
      {/* Hero section start */}
      <section className="w-full pt-28 pb-20 h-auto] bg-hero-bg bg-cover bg-no-repeat bg-main-colo-1 px-5 flex items-center justify-between gap-12 flex-wrap  lg:flex-nowrap ">
        {/* girl content start */}
        <div className="lg:w-[65%] w-full   relative order-2 lg:order-1">
          <img src={heroGirl} className="" alt="" data-aos="fade-up" />
          <img
            src={ball}
            alt=""
            className="absolute top-64 left-16 w-3"
            data-aos="fade-up"
          />
          <img
            src={ball}
            alt=""
            className="absolute bottom-64 -right-4 w-5"
            data-aos="fade-up"
          />
          <img
            src={circle}
            alt=""
            className="absolute top-28 left-5"
            data-aos="fade-up"
          />
          <img
            src={student}
            alt=""
            className="absolute bottom-3 right-6 w-40 sm:w-52 md:w-64"
            data-aos="fade-up"
          />
          <img
            src={chat}
            alt=""
            className="absolute bottom-20 sm:bottom-40 left-0 w-40 sm:w-52 md:w-64"
            data-aos="fade-up"
          />
        </div>
        {/* girl content end */}

        {/* hero content  start */}
        <div className="w-full lg:w-[55%] flex-col-reverse order-1 lg:order-2 text-center lg:text-start">
          <h1
            data-aos="fade-up"
            className="text-md uppercase font-sans font-medium text-gray-300"
          >
            Online learning
          </h1>
          <h1
            data-aos="fade-up"
            className="text-[34px] md:text-[44px] lg:text-6xl font-sans font-semibold text-white  my-6"
          >
            More then <p className="inline text-main-colo-2">25000+</p>{" "}
            education courses online
          </h1>
          <p data-aos="fade-up" className="text-gray-300 font-sans my-6">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus
            sollicitudin mauris tincidunt commodo ornare.
          </p>
          <button
            data-aos="fade-up"
            className=" px-7  py-3 md:px-12 md:py-3 bg-main-colo-1 border-[0.1px] border-gray-500 rounded-md hover:scale-95 duration-700 text-white font-sans font-medium"
          >
            Get Started
          </button>
        </div>
        {/* hero content  end*/}
      </section>
      {/* Hero section end */}

      {/* brind logo start */}
     

      {/* brind logo end */}
    </>
  );
}

export default Hero;
