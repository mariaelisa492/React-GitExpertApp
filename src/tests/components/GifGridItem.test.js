import React from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', ()=>{

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);  //yo puse como propTypes a la url y al title

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener un h4 con el titulo', () => {
        const h4 = wrapper.find('h4');
        expect(h4.text().trim()).toBe(title);
        
    })

    test('Debe tener el src y el alt de la img', () => {
        const img = wrapper.find('img');
        // console.log(img.props().src);   o podria ser asi img.prop('src)
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    })

    test('Debe tener el div con el className', () => {
        const div = wrapper.find('div');
        console.log(div.props());
        const className = div.prop('className');
        expect(className.includes('animate__fadeInDown')).toBe(true)  //puedo usar el includes porque es el className es un strgin
    })
})
