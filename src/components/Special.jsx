import FoodCard from "./FoodCard.jsx";
import Button from "./Button.jsx";
import GreekSalad from '../assets/greek salad.jpg';
import LemonDessert from '../assets/lemon dessert.jpg';
import Bruschetta from '../assets/bruchetta.svg'
export default function Special(){
    return(
        <>
            <section className="section">
                <div className="row">
                    <h2>This week's special</h2>
                    <Button 
                    text= "Open Menu"
                    linkTo="/menu"
                    />
                </div>
                
                <div className="food-container">
                    <FoodCard 
                        foodImg={GreekSalad}
                        foodTitle="Greek Salad"
                        foodDescription="A refreshing Mediterranean classic made with crisp cucumbers, sun-ripened tomatoes, red onions, Kalamata olives, and authentic feta cheese, lightly dressed in extra virgin olive oil and oregano."
                        foodPrice="9.99"
                    
                    />
                                        <FoodCard 
                        foodImg={LemonDessert}
                        foodTitle="Lemon Dessert"
                        foodDescription="A refreshing citrus delight featuring a silky lemon cream layered over a buttery base, perfectly balanced between sweet and tangy."
                        foodPrice="13.4"
                    
                    />
                                        <FoodCard 
                        foodImg={Bruschetta}
                        foodTitle="Bruschetta"
                        foodDescription="Crispy toasted artisan bread brushed with garlic and olive oil, topped with fresh diced tomatoes, fragrant basil, and a drizzle of premium extra virgin olive oil."
                        foodPrice="14.9"
                    
                    />
                </div>
            </section>

        </>
    )
}