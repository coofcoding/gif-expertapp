import { GifItem } from "./GifItem";
import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <div className="category-section">
            <h3>category: <span className="category-style">{category}</span></h3>
            {
                isLoading && ( <h2 className="loading">Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map(( gif ) => (
                        <GifItem 
                            key={ gif.id }
                            { ...gif }
                        />
                    ))
                }
            </div>
        </div>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}