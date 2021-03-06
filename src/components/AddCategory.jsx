import React, {useState} from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)         
              //obtengo todo lo que entra en el input
    }

    const handleSubmit = (e) =>{
        e.preventDefault();         //previene que se recargue la pagina con el submit(recibe el evento del enter)
        console.log('handleSubmit')
            if (inputValue.trim().length > 2){
                setCategories(cats => [inputValue, ...cats,]);
                setInputValue('');
            }
    }

    return (
        <form onSubmit={handleSubmit}>  
        <p>{inputValue}</p>         
            <input
            type="text"
            placeholder='Buscar'
            value = {inputValue}              //el value se va actualizando
            onChange = {handleInputChange}         //onChange genera los cambios enviadole el evento al setState
            />
        </form>
    )
}


AddCategory.propTypes = {    //debe ser obligatorio mandar una function
    setCategories: PropTypes.func.isRequired
}
