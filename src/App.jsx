import "./App.css";
import Category from "./components/Home-one/Categories/Category";
import Courses from "./components/Home-one/Courses/Courses";
import Hero from "./components/Home-one/Hero/Hero";
import Navbar from "./components/Home-one/Navbar/Navbar";
import "aos/dist/aos.css";
import Offer from "./components/Home-one/OFFER/Offer";
import Testimonials from "./components/Home-one/testimonials/Testimonials";
import TrendingCourse from "./components/Home-one/TrendingCourse/TrendingCourse";
import Footer from "./components/Home-one/Footer/Footer";
import { useEffect } from "react";
import Aos from "aos";
import Scrole from "./components/Home-one/scrole/Scrole";
import VideoCall from "./components/Home-one/videoCall/VideoCall";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Scrole />
      <Category />
      <VideoCall />
      <Courses />
      <Offer />
      <Testimonials />
      <TrendingCourse />
      <Footer />
    </>
  );
}

export default App;
