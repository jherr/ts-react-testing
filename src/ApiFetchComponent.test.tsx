import { render, screen } from "@testing-library/react";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { ApiFetchComponent } from "./ApiFetchComponent";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "ullas" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

test("ApiFetchComponent displays the fetched name correctly", async () => {
  render(<ApiFetchComponent />);

  const out = await screen.findByRole("contentinfo");

  expect(out).toHaveTextContent("Name is ullas");
});
