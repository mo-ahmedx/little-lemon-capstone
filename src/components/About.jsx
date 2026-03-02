import MarioA from "../assets/Mario and Adrian A.jpg";
import MarioB from "../assets/Mario and Adrian b.jpg";
export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2>About Us</h2>

        <div className="about-flex">
          <div className="text">
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="images">
            <img className="first-img" src={MarioA} alt="" />
            <img className="second-img" src={MarioB} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
