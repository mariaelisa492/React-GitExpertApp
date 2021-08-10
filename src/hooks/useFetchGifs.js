//esto es un hook inicia con use el nombre - es una funcion

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) =>{        
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{               //se hace el efecto para que solo cambie cuando cambie la categoria
        getGifs(category)         //hace la peticion http
        .then(gifs =>{          
                setstate({             //ponemos timeout intencional
                    data: gifs,
                    loading: false
                })
            })
    }, [category])


    return state;      //{data:[], loading: true}:
}