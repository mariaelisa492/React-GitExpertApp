
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs', () => {

    test('la petición debe traer 9 elementos ', async() => {
        // const gifs = await getGifs('One Punch');  aqui es el caso en el que mando categoria
        // expect(gifs.length).toBe(9);
        const gifs = await getGifs('');  //cuando no mando los parametros o categoria para hacer la peticion
        expect (gifs.length).toBe(0)

        
    })
    

})