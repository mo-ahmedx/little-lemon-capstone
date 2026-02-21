import { useState } from "react";
import "./App.css";
import "./index.css";
import "./components/Header.jsx";
import Hero from './components/Hero.jsx';
import Header from "./components/Header.jsx";
import FoodCard from "./components/FoodCard.jsx";
import Salad from "./assets/greek salad.jpg";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
        <Hero />
      <section className="section" id="food">
      <div className="grid grid-rows-3">
        <FoodCard
          foodImg={Salad}
          foodTitle="Greek salad"
          foodPrice="$30"
          foodDescription="sohfuwehfwajchawof
          dfofhawoefhawo
          kfkawejfowof"

        />
                <FoodCard
          foodImg={Salad}
          foodTitle="Greek salad"
          foodPrice="$30"
          foodDescription="sohfuwehfwajchawof
          dfofhawoefhawo
          kfkawejfowof"
          
        />
                <FoodCard
          foodImg={Salad}
          foodTitle="Greek salad"
          foodPrice="$30"
          foodDescription="sohfuwehfwajchawof
          dfofhawoefhawo
          kfkawejfowof"
          
        />
                <FoodCard
          foodImg={Salad}
          foodTitle="Greek salad"
          foodPrice="$30"
          foodDescription="sohfuwehfwajchawof
          dfofhawoefhawo
          kfkawejfowof"
          
        />
                <FoodCard
          foodImg={Salad}
          foodTitle="Greek salad"
          foodPrice="$30"
          foodDescription="sohfuwehfwajchawof
          dfofhawoefhawo
          kfkawejfowof"
          
        />
      </div>
      </section>
      <section className="section" id="about">
        <h1>About Us</h1>
      </section>
      <section className="section" id="reservation">
        <h1>Reservation</h1>
      </section>
            <section className="section" id="menu">
        <h1>Menu</h1>
      </section>
            <section className="section" id="order-online">
        <h1>Order</h1>
      </section>
            <section className="section" id="login">
        <h1>Login</h1>
      </section>
    </>
  );
}

export default App;
