import React from "react";
import ContentServices from "../components/ContentServices";
import ContentContact from "../components/ContentContact";
import ContentSchedule from "../components/ContentSchedule";
import ContentTestimonials from "../components/ContentTestimonials";

const Services = () => {
  return (
    <>
      <div className="space-navbar-pages"></div>
      <ContentServices />
      <ContentTestimonials />
      <ContentSchedule />
      <ContentContact />
    </>
  );
};

export default Services;
