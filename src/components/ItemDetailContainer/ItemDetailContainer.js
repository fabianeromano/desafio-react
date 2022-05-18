import React from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { productos } from "../data/productos";

export default function ItemDetailContainer(){


    const [item, setItem] = React.useState([])

    const getItem = ()=> new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos[3])
        }, 2000)
    })
    getItem().then((result)=>{
        console.log(result)
    }
    )
    React.useEffect(()=>{
        getItem().then((res)=>setItem(res))
        // eslint-disable-next-line
    },[])


    return(
<div className="flex justify-center bg-violet-500">

    <ItemDetail item={item} />
</div>

    )
}