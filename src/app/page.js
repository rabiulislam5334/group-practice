import React from "react";
import Navber from "@/components/navber/Navber";
import Latest from "@/components/Home/Latest";
import Footer from "@/components/Home/Footer";
import StaticCarCard from "@/components/CardSection/Vehicle";

function page() {
  return (
    <>
      <Navber />
      <Latest />
      <StaticCarCard></StaticCarCard>
      <Footer />
    </>
  );
}

export default page;
