import { render, screen } from "@testing-library/react";
import App from "./App";

test("shows only signup and login before a user enters", () => {
  render(<App authConfigured={false} />);

  expect(screen.getByRole("button", { name: /sign up/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  expect(screen.queryByText(/book list/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/add new book/i)).not.toBeInTheDocument();
});
