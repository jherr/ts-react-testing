import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ReduxCounter } from "./ReduxCounter";
import { Provider } from "react-redux";
import { createStore } from "./store";

test("ReduxCounter increments count on button click", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const incrementBtn = screen.getByText(/Increment/i);
  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent("1");
});

test("ReduxCounter maintains count state between multiple increments", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const incrementBtn = screen.getByText(/Increment/i);
  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent("1");
});
