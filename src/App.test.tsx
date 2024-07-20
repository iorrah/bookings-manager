import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Read Data", () => {
  it("should display the Booking Details when the Booking on the list is clicked", () => {
    // ARRANGE
    render(<App />);

    // ACT

    expect(screen.getByText("Paul Ross")).toBeVisible();
    fireEvent.click(screen.getByText("Paul Ross"));

    // ASSERT

    expect(screen.getByText("#2776493759")).toBeVisible();
    expect(screen.getByText("Booked on Tue, 11 Jun 24")).toBeVisible();
    expect(screen.getByText("11 Sep 24 - 16 Sep 24")).toBeVisible();
    expect(screen.getByText("$4,399.94")).toBeVisible();
  });

  it.skip("should hide the Booking Details when the Close Button is clicked", async () => {
    // ARRANGE
    render(<App />);

    // ACT
    fireEvent.click(screen.getByText("Paul Ross"));
    fireEvent.click(screen.getByAltText("Close Booking"));

    // ASSERT
    expect(screen.findByText("#2776493759")).not.toBeInTheDocument();
  });

  it.skip("should hide the current and show the next Booking when the Booking on the list is clicked", () => {
    // ARRANGE
    render(<App />);

    // ACT
    fireEvent.click(screen.getByText("Paul Ross"));
    expect(screen.getByText("#2776493759")).toBeVisible();
    fireEvent.click(screen.getByText("Ana Simon"));

    // ASSERT
    expect(screen.findByText("#8784339168")).toBeVisible();
  });
});

describe("Create Data", () => {
  it.skip("should hide the Booking Details and display the Booking Creation Form when the Button is clicked", () => {
    // ARRANGE
    render(<App />);

    // ACT
    fireEvent.click(screen.getByText("Paul Ross"));
    expect(screen.getByText("#2776493759")).toBeVisible();
    fireEvent.click(screen.getByText("Create Booking"));

    // ASSERT
    expect(screen.findByText("#2776493759")).not.toBeInTheDocument();
    expect(screen.getByText("New Booking")).toBeVisible();
  });

  it.only("should create a Booking", () => {
    // ARRANGE
    render(<App />);

    // ACT
    fireEvent.click(screen.getByText("Create Booking"));

    // ASSERT
    expect(screen.getByText("New Booking")).toBeVisible();
    // ...
  });
});
