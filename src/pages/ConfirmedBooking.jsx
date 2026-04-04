import "./confirmBooking.css";
export default function ConfirmedBooking() {
    return (
        <div className="confirmation-wrapper">
            <div className="confirmation-card">
                <div className="success-icon">✓</div>
                <h1>Booking Confirmed!</h1>
                <p>You have successfully booked a table at Little Lemon.</p>
                <p>A confirmation email has been sent to your inbox.</p>
                <a href="/" className="home-button">Return to Home</a>
            </div>
        </div>
    );
}