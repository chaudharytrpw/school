import Image from "next/image";
import Hero from "./components/Hero";
import PremiumSlider from "./components/PremiumSlider";
import FAQ from "./components/FAQ";
import Director from "./components/Director";
import ClassesTeachers from "./components/ClassesTeachers";

export default function Home() {
  return (
    <>
    <Hero/>
     <Director/>
    <PremiumSlider/>
   
    <ClassesTeachers/>
    <FAQ/>
    </>
  );
}
