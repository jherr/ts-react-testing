import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import React from "react";

test("SideBar should render navigation links with correct name and href", () => {
  const items = [
    {
      name: "home",
      href: "/home",
    },
  ];
  render(<SideBar items={items} />);
  const ancherElm = screen.getAllByRole("navigation");
  expect(ancherElm[0]).toHaveTextContent(items[0].name);
  expect(ancherElm[0]).toHaveAttribute("href", items[0].href);
});
