import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ZustandCounter } from "./ZustandCounter";
import { useStore } from "./zustandStore";

const originalState = useStore.getState();

beforeEach(()=>{
  useStore.setState(originalState)
})

test("ZustandCounter increments count correctly on button click", ()=>{
  render(<ZustandCounter />);
  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");
  
  const incrementBtn = screen.getByText(/Increment/i);
  fireEvent.click(incrementBtn);
  
  expect(counter).toHaveTextContent("1");
})

test("ZustandCounter maintains count state between multiple increments", ()=>{
  render(<ZustandCounter />);
  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");
  
  const incrementBtn = screen.getByText(/Increment/i);
  fireEvent.click(incrementBtn);
  
  expect(counter).toHaveTextContent("1");
})