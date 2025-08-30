// Counter.test.tsx


/*
To run your Jest tests, follow these steps:

1. Make sure Jest is installed:
  npm install --save-dev jest @testing-library/react @testing-library/jest-dom

2. Add a test script to your package.json:
  "scripts": {
    "test": "jest"
  }

3. Run the tests using:
  npm test
  // or
  npx jest

If you are using Next.js, you may need a jest.config.js file. Example:
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
   "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};

*/

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./page";

describe("Counter Component", () => {
  test("renders initial count", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  });

  test("increments count when button is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
  });

    test("decrements count when button is clicked", () => {
      render(<Counter />);
      fireEvent.click(screen.getByText("Decrement"));
      expect(screen.getByTestId("count")).toHaveTextContent("Count: -1");
    });
  });