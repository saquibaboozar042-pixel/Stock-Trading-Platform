import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";


// Test Suite
describe('Hero Component', ()=>{
    test("render hero image", () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("hero-image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media\\homeHero.png");
    });

    test("render signup button", () => {
        render(<Hero/>);
        const signupButton = screen.getByRole("button", { name: "Signup now" });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
})