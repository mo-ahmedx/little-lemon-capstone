import { expect, test } from "vitest";
import BookingForm from "./components/BookingForm.jsx";
import { initialTime, updateTimes } from "./pages/BookingPage.jsx";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("Renders heading text", () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={["17:00"]} />
    </BrowserRouter>,
  );

  const headingElement = screen.getByText("Reservation");

  expect(headingElement).toBeInTheDocument();
});

test("Make sure the button is disabled when fields are empty", () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={["17:00"]} />
    </BrowserRouter>,
  );

  const btn = screen.getByRole("button");

  expect(btn).toBeDisabled();
});
test("updateTimes returns a new state based on the date provided", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", payload: "2026-04-01" };

  const result = updateTimes(initialState, action);

  // YOUR TASK: Verify the result is what you expect
  // Hint: Since fetchAPI is random-ish, just check that it returns
  // an array and isn't empty!

  expect(Array.isArray(result)).toBe(true);

  expect(result.length).toBeGreaterThan(0);

  expect(result).not.toEqual(initialState);
});

test("Submit button must be disabled when time is empty", () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        time=""
        guests={2}
        date="2026-04-1"
        occasion="Birthday"
      ></BookingForm>
    </BrowserRouter>,
  );

  const btn = screen.getByRole("button");

  expect(btn).toBeDisabled();
});
