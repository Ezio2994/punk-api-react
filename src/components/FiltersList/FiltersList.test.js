import React from "react";
import { render } from "@testing-library/react";
import FiltersList from "./FiltersList";

describe("FiltersList tests", () => {
  it("should render", () => {
    expect(render(<FiltersList />)).toBeTruthy();
  });
});
