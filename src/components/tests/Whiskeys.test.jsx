import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Whiskeys from '../../pages/Whiskeys'
import {whiskeys} from "../../hooks/GlobalWhiskey"

    beforeEach(function () {
      render(<Whiskeys />);
    });

describe('Whiskeys component', () => {
    it('Has a heading', () => {
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument
    })
    it('Has multiple whiskeys', () => {
        expect(whiskeys).toBeDefined
    })
})

