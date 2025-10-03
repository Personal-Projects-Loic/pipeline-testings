import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("le compteur démarre à 0 et augmente quand on clique", () => {
  render(<App />);

  // Vérifie que le compteur est à 0
  expect(screen.getByText(/count is 0/i)).toBeInTheDocument();

  // Clique sur le bouton
  fireEvent.click(screen.getByRole("button"));

  // Vérifie que le compteur est passé à 1
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
});
