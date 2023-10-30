import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./style.scss";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <!-- Dark Mode Toggler --> */}
      <input type="checkbox" id="darkMode" />
      <label htmlFor="darkMode">
        <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
      </label>

      <div className="wrapper">
        {/* <!-- Header --> */}
        <Header></Header>

        {/* <!-- Hero --> */}
 <Hero></Hero>

        {/* <!-- Banner --> */}
       <Banner></Banner>

        {/* <!-- Skills --> */}
<Skills></Skills> 

        {/* <!-- Projects --> */}
<Projects></Projects>

        {/* <!-- About Me --> */}
 <AboutMe></AboutMe>
        {/* <!-- Contact --> */}
<Contact></Contact>
        {/* <!-- Footer --> */}
   <Footer></Footer>
      </div>
    </>
  );
}

export default App;
