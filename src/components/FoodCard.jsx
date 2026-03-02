import "../index.css";
import Scooter from "../assets/scooter-delivery-svgrepo-com.svg";
export default function FoodCard({foodImg, foodTitle, foodPrice, foodDescription}){
    return (
        <div className="f-card-container">
            <img className="f-img" src={foodImg} alt={foodTitle} />
            <div className="title-and-price">
                <h2>{foodTitle}</h2>
                <h4 className="price">${foodPrice}</h4>
            </div>
            <p className="f-description">{foodDescription}</p>
            <a href="#order-online" className="order-delivery">
                <p>Order Delivery</p>
                <img className="scooter" src={Scooter} alt="scooter svg" />
            </a>
        </div>
    )
}