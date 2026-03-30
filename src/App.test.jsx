import { expect, test } from "vitest";
import BookingForm from "./components/BookingForm.jsx";
import { render, screen } from "@testing-library/react";

test ("Renders heading text", () => {

    render(<BookingForm availableTimes={["17:00"]} />);
    
    const headingElement = screen.getByText("Reservation");
    
    expect(headingElement).toBeInTheDocument();

});