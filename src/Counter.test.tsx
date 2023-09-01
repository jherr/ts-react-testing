import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";
import React from "react";

test("it increments the count when 'Add' button is clicked", () => {
  render(<Counter />);

  const buttonElm = screen.getByText("Add");
  const divElm = screen.getByRole("contentinfo");
  fireEvent.click(buttonElm);

  expect(divElm).toHaveTextContent("count is 1");
});
