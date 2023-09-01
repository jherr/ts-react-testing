import { useApi } from "./useApi";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { act, renderHook, waitFor } from "@testing-library/react";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "ullas" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

test("useApi hook fetches and returns data from the API correctly", async()=>{
  const {result} = renderHook(()=>useApi());  

  await waitFor(()=>{
    expect(result.current).toEqual({name: "ullas"})
  })

})