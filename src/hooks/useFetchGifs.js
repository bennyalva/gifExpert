import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

const useFetchGifs = (category) => {
  const [state, setstate] = useState({
      data:[],
      loadding: true
  })
  useEffect(() =>{
    getGifs(category)
    .then(imgs => setstate({
        data: imgs,
        loadding: false
    }))
  },[category]);
  return state;
}

export default useFetchGifs
