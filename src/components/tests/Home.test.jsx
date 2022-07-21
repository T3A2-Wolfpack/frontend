import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../../pages/Home"
import fetch from 'node-fetch'

global.fetch = fetch
    beforeEach(function () {
      render(<Home />);
    });
describe('Home component', () => {
    it('Shows Whiskey Taster heading', () => {
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Whiskey Taster')
    })
    it('Has an image', () => {
        expect(screen.getByRole('img')).toBeInTheDocument
    })
})