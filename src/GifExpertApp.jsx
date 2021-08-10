import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

 //functional component React


export const GitExpertApp = () => {   

    const [categories, setCategories] = useState(['Dragon Ball']);
    
    return (
    <>
        <h2>GitExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        
        <ol>
            {
                categories.map(category => (
                    <GifGrid 
                    key = {category}
                    category = {category}
                    />
                ))
            }
        </ol>
    </>
    )
}



