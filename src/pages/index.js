import React, { useState } from "react";
import Sidebar from "../components/SideBar/index";
import Navbar from "../components/Navbar/index";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/data";
import Services from "../components/Services";

function Home() {
  //function to toggle the sidebarmenu to open/close when clicked

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
      <InfoSection {...homeObjFour} />

      {/* <Footer /> */}
    </>
  );
}

export default Home;
