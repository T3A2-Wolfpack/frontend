import { render } from "@testing-library/react";
import { describe } from "vitest";
import App from "../App";

describe('App component', () => {
    it('Shows Whiskey Taster heading', () => {
        render(<App />)
    })
})