import TestimonialCard from "./TestimonialCard";
import CustomerOne from '../assets/CustomerOne.jpg';
import CustomerTwo from '../assets/pleased-handsome-male-customer-show-thumb-up-approval.jpg';
import CustomerThree from '../assets/proud-you-did-great-portrait-happy-impressed-attractive-supportive-armenian-girl-wearing-orange-tshirt-show-thumbsup-approval-agree-gesture-liking-awesome-prom-outfit-friend-bought-smiling.jpg';
import CustomerFour from '../assets/52659.jpg';

export default function Testimonial(){
    return(
        <>
            <section className="section testi-section">
                    <h2>Testimonial</h2>
                <div className="testi-grid">
                    <TestimonialCard
                        userImg={CustomerOne}
                        userName="Melenia John"
                        userRate="4.5"
                        userComment="I really love Little Lemon Restaurant!"
                    />
                    <TestimonialCard
                        userImg={CustomerTwo}
                        userName="Rhiordan Adams "
                        userRate="4"
                        userComment="I enojy ordering and getting my orders faster!"
                    />
                    <TestimonialCard
                        userImg={CustomerThree}
                        userName="Leanna Saunders"
                        userRate="5"
                        userComment="I like the way Little Lemon handles thier customers!"
                    />
                    <TestimonialCard
                        userImg={CustomerFour}
                        userName="Marcelo Hahn"
                        userRate="4.7"
                        userComment="Little Lemons makes my day easier!"
                    />
                </div>
            </section>
        </>
    )
}