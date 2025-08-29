import AnimatedBar from "../components/about-us/AnimatedBar";
import Mission from "../components/about-us/Mission";
import ChooseUs from "../components/about-us/ChooseUs";
import HowWeWork from "../components/about-us/HowWeWork";
import GoogleReviews from "../components/about-us/GoogleReviews";

export default function AboutUs() {
  return (
    <section
      className="about-us"
      // style={{ height: "200vh" }}
    >
      <Mission className="about-us" />
      <AnimatedBar />
      <ChooseUs className="about-us" />
      <HowWeWork className="about-us" />
      <GoogleReviews />
    </section>
  );
}
