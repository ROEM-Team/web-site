import React from "react";
import AboutUs1 from "../../components/About-us1";
import BlogsThreeColumn1 from "../../components/Blogs-three-column1";
import Footer from "../../components/Footer";
import IntroWithSlider3 from "../../components/Intro-with-slider3";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import NumbersWithVideo from "../../components/Numbers-with-video";
import Services3 from "../../components/Services3";
import Services1 from "../../components/Services1";
import Services2 from "../../components/Services2";
import Services4 from "../../components/Services4";
import Services5 from "../../components/Services5";
import Services6 from "../../components/Services6";
import Testimonials1 from "../../components/Testimonials1";
import Works2Slider from "../../components/Works2-slider";
import DarkTheme from "../../layouts/Dark";

const Homepage3 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  // React.useEffect(() => {
  //   var navbar = navbarRef.current;
  //   if (window.pageYOffset > 300) {
  //     navbar.classList.add("nav-scroll");
  //   } else {
  //     navbar.classList.remove("nav-scroll");
  //   }
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 300) {
  //       navbar.classList.add("nav-scroll");
  //     } else {
  //       navbar.classList.remove("nav-scroll");
  //     }
  //   });
  // }, [navbarRef]);

  return (
    <DarkTheme>     
      <NavbarFullMenu nr={navbarRef} lr={logoRef} />
      <IntroWithSlider3 />
      <AboutUs1 skillsTheme="dark" />
      {/* <AboutWithSkills skillsTheme="dark" /> */}
      <Services1 />
      <Services2 />
      <Services3 />
      <Services4 />
      <Services5 />
      <Services6 />|
      <NumbersWithVideo />
      <Works2Slider subBG />
      <Testimonials1 />
      <BlogsThreeColumn1 subBG />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage3;
