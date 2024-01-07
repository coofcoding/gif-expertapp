import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['fnaf']);

    const onAddCategory = (newCategory) => {
        const lowerCategories = categories.map(category => category.toLowerCase());

        if (lowerCategories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <div className="search-bar">
                <h1>Search Gifs</h1>

                <AddCategory
                    onNewCategory={onAddCategory}
                />
            </div>

            {
                categories.map(category =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}