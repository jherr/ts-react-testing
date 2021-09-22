import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ZustandCounter } from "./ZustandCounter";
import { useStore } from "./zustandStore";

const originalState = useStore.getState();
beforeEach(() => {
  useStore.setState(originalState);
});

test("add one", () => {
  render(<ZustandCounter />);

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});

test("add one again", () => {
  render(<ZustandCounter />);

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});
