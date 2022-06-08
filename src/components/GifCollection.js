import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'

import { GifCollectionItem } from './GifCollectionItem'


export const GifCollection = ({category}) => {
    // const [images, setImages]=useState([])


const {data, loading}= useFetchGif(category);



  return (
<>

   <h3 className='secTitle animate__animated animate__fadeIn'>{category}</h3>
{loading&& <p className='sectitle animate__animated animate__flash'>Loading</p> }
   <div className='cardCollection'>

    {
      data.map(img=>(
         <GifCollectionItem key={img.id} {...img}/>
        ))
    }

   </div>
   </>
  )
}
