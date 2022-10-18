import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the h1 title bug tracker", () => {
  render(<App />);
  const h1Title = screen.getByText(/bug tracker/i); //regex para case insensitive
  expect(h1Title).toBeInTheDocument();
});
