import React from "react";
import { render } from "@testing-library/react";
import Favourite from "./Favourite";

describe("Favourite tests", () => {
  it("should render", () => {
    expect(render(<Favourite />)).toBeTruthy();
  });
});
