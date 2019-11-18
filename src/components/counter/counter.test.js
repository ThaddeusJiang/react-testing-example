import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from ".";

test("<Counter />", () => {
  const { getByText } = render(<Counter />);

  expect(getByText("0")).toBeTruthy();

  fireEvent.click(getByText("+"));

  expect(getByText("1")).toBeTruthy();

  fireEvent.click(getByText("-"));
  fireEvent.click(getByText("-"));

  expect(getByText("-1")).toBeTruthy();
});
