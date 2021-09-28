import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'


describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)   //la voy a dejar aqui para reutilizarla
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot
    })
    

    test('Debe cambiar la caja de texto', () => {

        const input = wrapper.find('input')
        const value = 'Hola mundo'
        input.simulate('change', {target: {value}})         //esto va a tener el valor del evento en el objeto target y dentro el objeto value
    
        expect(wrapper.find('p').text().trim()).toBe(value)

    })

    test('No debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})        //metodo mandado dentro del objeto
        expect (setCategories).not.toHaveBeenCalled();          //verifico que no se haya llamado
    })
    
    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        
    })
    

    
})
