import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NewWhiskey from "../../pages/NewWhiskey";

describe("New Whiskey component", () => {
  it("has a form", () => {
    expect(screen.findByRole("form")).toBeValid;
  });
  it("has an input field", () => {
    expect(screen.findByRole("textbox")).toBeInTheDocument;
  });
  it("has a button for the form", () => {
    expect(screen.findByRole("button")).toBeDefined;
  });
    it("has a whiskey name title", () => {
    expect(screen.findByRole('heading', {level: 2})).toBeInTheDocument
    })
});
