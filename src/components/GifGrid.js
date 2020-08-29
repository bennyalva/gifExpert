import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data: images, loadding} = useFetchGifs(category);
    console.log('new category', category)
    
    return (
        <>
        <h3 className="animate__animated animate__bounce" >{ category}</h3>
        {loadding && <p className="animate__animated animate__flash">Loading....</p>}
        <div className="card-grid">
            
                {
                    images.map(img2 => (
                      <GifGridItem 
                        {...img2}
                        key={img2.id} 
                      /> 
                    ))
                }
        </div> 
        </>    
    )
}
