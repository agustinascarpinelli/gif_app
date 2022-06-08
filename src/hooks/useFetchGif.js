import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"

export const useFetchGif = (category) => {
    const [state,setState] =useState({
        data:[],
        loading:true,
    })
useEffect(()=>{
    getGif(category)
    .then(gif=>
        setState({
            data:gif,
            loading:false,
    }))

},[category])

    return state;
}
