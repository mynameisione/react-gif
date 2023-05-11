import {useState} from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Cerditos']);

    const onAddCategory = (newCategory) => {
        
        if (categories.includes(newCategory) ) return;

        setcategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Los gifs de cerditos de Ione</h1>

            <AddCategory 
                onNewCategory = { onAddCategory }
            />

            {
                categories.map(category => (
                    <GifGrid key={ category } category= { category }  />
                ))
            }
        </>
    )
}