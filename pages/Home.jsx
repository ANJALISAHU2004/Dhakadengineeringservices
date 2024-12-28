import "./Home.css"

import About from "./About";

import HeroSection from "../components/HeroSection";

import CardSlider from "../Components/cardSlider";

import Slider from "../Components/Slider";

import Pop_Up from "../Components/PopUp.JSX";
const Home=()=>{
  return<>
  <Slider></Slider>
  <HeroSection></HeroSection>
  <Pop_Up></Pop_Up>
   <About></About>
  <CardSlider></CardSlider>
 
 
 
  </>
}
export default Home