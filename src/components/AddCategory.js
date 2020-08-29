import React, { useState } from 'react'
import PropTypes from 'prop-types';
const AddCategory = ({setCategories1}) => {
    const [inputValue, setInputValue] = useState('');
    const handlerChange = (e) => {
        setInputValue(e.target.value)
    }
    

    const handlerSubmit = (e) => {
        e.preventDefault();// no recargar lo del navegador
        if (inputValue.trim().length > 2){
            setCategories1(cats => [inputValue,...cats ]);
            setInputValue('')
        }
        
    }
    return (
        <form onSubmit={handlerSubmit}>
         <h2>Add category</h2> 
            <input 
                type="text"
                value={inputValue}
                onChange={handlerChange}
            />  
        </form>
    )
}
AddCategory.propTypes = {
    setCategories1: PropTypes.func.isRequired
}
export default AddCategory
