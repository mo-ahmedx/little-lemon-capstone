import "../index.css";
import Hero from '../components/Hero.jsx';
import Special from '../components/Special.jsx';
import TestimonialPage from "../components/TestimonialPage.jsx";
import About from "../components/About.jsx";
import Footer from '../components/Footer.jsx';
import BookingPage from "./BookingPage.jsx";
export default function Landing(){
    return (
        <>
        <Hero />
        <Special />
        <TestimonialPage />
        <About />
        <Footer />
        </>
    )
}