import React from "react";
import { useCounter } from "./useCounter";
import { renderHook, act } from "@testing-library/react";

test("useCounter hook should correctly increment the count", ()=>{
  const {result} = renderHook(()=>useCounter());

  act(()=>{
    result.current.inc();
  })
  expect(result.current.count).toBe(1)
})

