import React from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { productos } from "../data/productos";
import Footer from "../../components/Footer/Footer"

export default function ItemDetailContainer({productId}){


    const [item, setItem] = React.useState(null)

    const getItem = ()=> 
           (productos.find(item => item.id === +productId))
       
    
    React.useEffect(()=>{
        setItem(getItem())
        // eslint-disable-next-line
    },[productId])


    return(
<div className="">
    <ItemDetail item={item} />
    <Footer />
</div>

    )
}