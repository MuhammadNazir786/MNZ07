import Girl from "../../../assets/images/Home1/category-girl.webp";
import Video from "../../../assets/images/Home1/category-video.mp4";
import videoIcons from "../../../assets/images/Home1/video-icons.svg";


function VideoCall() {
  return (
<>
 {/* video call div start */}
 <div
          className="mt-20 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-10"
          data-aos="fade-up"
        >
          {/* girl div start  */}
          <div className="grid  grid-cols-1 md:grid-cols-2 bg-main-colo-3 rounded-lg">
            <div className="bg-main-colo-3 my-10 md:my-0  flex items-center md:items-start ps-5  justify-center flex-col gap-4 rounded-lg">
              <h1 className="text-2xl font-sans font-medium">
                Quick access to the <br /> popular courses
              </h1>
              <button className="px-10 py-3 hover:scale-95 duration-300 rounded-md text-lg font-sans font-medium bg-main-colo-2 text-main-colo-1">
                View Courses
              </button>
            </div>

            <img
              src={Girl}
              alt=""
              className="object-cover  h-72 w-full rounded-e-lg"
            />
          </div>
          {/* girl div end */}

          {/* video   start */}
          <div className=" bg-[#f1f1e9] rounded-md grid grid-cols-1 md:grid-cols-2 px-8 items-center py-4 gap-5">
            <div className="text-center md:text-start">
              <h1 className="text-2xl font-sans font-medium my-4 text-main-colo-1">
                Develop your <br /> skills online!
              </h1>
              <button className="px-10 py-3 bg-main-colo-1 text-white font-sans font-medium rounded-md hover:scale-95 duration-300">
                Apply Now
              </button>
            </div>
            <div className="">
              <div className="relative">
                <video
                  src={Video}
                  className="rounded-md h-full w-full"
                  autoPlay
                  muted
                  loop
                ></video>
                <img
                  src={videoIcons}
                  className="absolute bottom-2  translate-x-1/2 left-1/1 right-1/2  lg:w-28"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* video   end */}
        </div>
</>    
  )
}

export default VideoCall;