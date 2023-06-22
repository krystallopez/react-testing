/** @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import { App } from "./App";

/**
 * Verify something should render
 */
test("App should render", () => {
  render(<App />);

  expect(screen.getByText("Welcome, party people!")).toBeInTheDocument();
});

test("Button should render", () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const buttonElement = screen.getAllByRole("button");
  expect(buttonElement.length).toBe(2);
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test("theme button should update button text", () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const buttonElement = screen.getByText("Current theme: light");
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  expect(buttonElement.textContent).toBe("Current theme: dark");
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test("theme button should toggle styles", () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const buttonElement = screen.getByText("Current theme: light");
  fireEvent.click(buttonElement);
  expect(buttonElement.textContent).toBe("Current theme: dark");
  expect(document.querySelector("body")).toHaveStyle("background-color: #333");
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test("hidden button should toggle hidden content", () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  // create a variable to access the show/hide content button
  const toggleButton = screen.getByText('Show hidden content');
  expect(toggleButton).toBeInTheDocument();
  // create a variable to query for the div content 
  const hiddenContent = screen.queryByText('this content is hidden by default');
  expect(hiddenContent).not.toBeInTheDocument();
  fireEvent.click(toggleButton);
  expect(toggleButton.innerHTML).toBe('Hide hidden content');
  expect(screen.queryByText('this content is hidden by default')).toBeInTheDocument();
});

/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
