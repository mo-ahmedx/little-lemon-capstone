import Food from "../assets/restauranfood.jpg";
import "../index.css";
import Button from './Button.jsx';
export default function Hero() {
  return (
    <>
      <section className="section" id="home">
        <div className="hero-bg">
          <div className="hero-flexbox">
            <div className="hero-text">
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>
                We are a family owned <br />Mediterranean restaurant <br /> focused on
                traditional recipes served with a modern twist.
              </p>
              <Button text = "Reserve Table" linkTo = '/booking' />
            </div>
            <div className="hero-img-container">
              <img
                className="hero-img"
                src={Food}
                alt="Little Lemon Restaurant's Food"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
