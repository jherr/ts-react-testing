import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonWrapper } from "./ButtonWrapper";
import React from "react";

test("it triggers the onClick handler when clicked", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title={"ClickMe"} />);
  const buttonElm = screen.getByText("ClickMe");
  fireEvent.click(buttonElm);
  expect(onClick).toHaveBeenCalledTimes(1);
});
