// import "./Slider.css";
// import ImageSlider from "./ImageSlider";
import ImageSlider from "./slide";
export default function Slider() {
  const slides = [
    { url: "./Images/SliderImg/ps5.jpg", title: "PEB_SHED" },
    { url: "./Images/SliderImg/ps2.jpg", title: "PEB_SHED" },
    { url: "./Images/SliderImg/ps4.jpg", title: "PEB_SHED" },
    { url: "./Images/SliderImg/p7.png", title: "PEB_SHED" },
    { url: "./Images/SliderImg/p8.jpg", title: "PEB_SHED" },
    { url: "./Images/SliderImg/p9.png", title: "PEB_SHED" },
  ];
  const containerStyles = {
    height: "100vh",
    width: "100%",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
