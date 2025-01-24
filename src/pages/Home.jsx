import React from "react";
import ContentHome from "../components/ContentHome";
import ContentAbout from "../components/ContentAbout";
import ContentServices from "../components/ContentServices";
import ContentTestimonials from "../components/ContentTestimonials";
// import ContentBlog from "../components/ContentBlog";
import ContentSchedule from "../components/ContentSchedule";
import ContentContact from "../components/ContentContact";
import ContentAchievements from "../components/ContentAchievements";

const Home = () => {
  return (
    <>
      <ContentHome />
      <ContentAbout />
      <ContentAchievements />
      <ContentServices />
      <ContentTestimonials />
      {/* <ContentBlog /> */}
      <ContentSchedule />
      <ContentContact />
    </>
  );
};

export default Home;
