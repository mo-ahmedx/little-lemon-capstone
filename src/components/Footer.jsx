import FooterImg from '../assets/restauranfood.jpg';
export default function Footer(){
    return(
        <>
        <footer>
            <img src={FooterImg} alt="Restaurant Footer images" />
            <ul>
                <li>Navigation Links</li>
                <li><a href="">home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservation</a></li>
                <li><a href="">Order online</a></li>
                <li><a href="">Login</a></li>
            </ul>
            <ul>
                <li>Contacts</li>
                <li><a href="">Address</a></li>
                <li><a href="">Phone number</a></li>
                <li><a href="">Email</a></li>
            </ul>
            <ul>
                <li>Social Media</li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Tiktok</a></li>
            </ul>
        </footer>
        </>
    )
}