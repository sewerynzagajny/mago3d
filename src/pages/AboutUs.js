import AnimatedBar from "../components/about-us/AnimatedBar";
import Mission from "../components/about-us/Mission";
import ChooseUs from "../components/about-us/ChooseUs";

export default function AboutUs() {
  return (
    <section
      className="about-us"
      // style={{ height: "200vh" }}
    >
      <Mission className="about-us" />
      <AnimatedBar />
      <ChooseUs className="about-us" />
    </section>
  );
}
