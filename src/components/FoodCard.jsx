import "../index.css";
import Scooter from "../assets/scooter-delivery-svgrepo-com.svg";
export default function FoodCard({foodImg, foodTitle, foodPrice, foodDescription}){

    <div className="f-card-container">
        <img src={foodImg} alt="Image of the food!" />
        <div className="title-and-price">
            <h2>
                {foodTitle}
            </h2>
            <h4>
                {foodPrice}
            </h4>
        </div>
        <p className="f-description">
            {foodDescription}
        </p>
        <a href="order-online" className="order-delivery">
            <p>
                Order Delivery
            </p>
            <img src={Scooter} alt="scooter svg" />
        </a>
    </div>

}