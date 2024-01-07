import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"
import React, { useState } from "react"

// jest.mock('../src/GifExpertApp')

describe('Pruebas en <GifExpertApp/>', () => {
    const inputValue = 'memes';

    test('actualizar valor del input', async () => {

        render(
            <GifExpertApp />
        )

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue } })

        expect(input.value).toBe(inputValue)
    })

    test('acción de submit del formulario', () => {

        render(
            <GifExpertApp />
        )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })

        fireEvent.submit(form)
        expect(input.value).toBe('')
    })

    test('prueba de comparación con el snapshot', () => {

        const { container } = render(
            <GifExpertApp />
        )

        expect(container).toMatchSnapshot();

    })



})