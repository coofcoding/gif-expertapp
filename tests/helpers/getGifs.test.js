import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas del getGifs', () => {
    test('debe de retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('One Punch');

        expect( gifs[0] ).toEqual( {
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    }, 60000)
})