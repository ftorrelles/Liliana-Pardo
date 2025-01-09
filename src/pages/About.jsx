import React from "react";
import ContentAbout from "../components/ContentAbout";
import ContentServices from "../components/ContentServices";
import ContentContact from "../components/ContentContact";
import ContentAchievements from "../components/ContentAchievements";

const About = () => {
  return (
    <>
      <div className="space-navbar-pages"></div>
      <ContentAbout />
      <ContentAchievements />
      <ContentServices />
      <ContentContact />
    </>
  );
};

export default About;
