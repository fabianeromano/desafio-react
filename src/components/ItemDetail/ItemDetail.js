import { useState } from 'react'
import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail({ item }) {
    const ImgCard = () => {
        return (
            <div className="flex items-center justify-center">
                <img className="w-3/4 h-auto py-4" src={item?.image} alt={item?.title} />
            </div>)
    }

    const TitleCard = () => {
        return (
            <p className="my-2 text-4xl font-bold text-gray-500">{item?.title}</p>
        )
    }

    const PrecioCard = () => {
        return (
            <p className="my-4 text-2xl font-bold">${item?.price}</p>
        )
    }

    const Description = () =>{
        return (
            <>
                <h4 className="font-bold ">Descripcion:</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis, dolorem ipsum nemo sit molestias quasi neque dolore debitis libero laboriosam necessitatibus? Corporis, dolores illum.</p>
            </>
        )
    }
    
    const StockCard = () => {
        return (
            <p className="text-xl font-semibold text-center">Stock: {item?.stock}</p>
        )
    }
    const [count, setCount]= useState(1)

    const onAdd = (quantityToAdd) => {
        if(count < item?.stock){
            setCount(count + quantityToAdd)
        }
    }

    const onDecrease = (quantityToDecrease)=>{
        if(count > 1){
            setCount(count - quantityToDecrease)
        }
    }

    return (
        <div className="flex" >
            <div className="w-2/3 ">
                <ImgCard />
            </div>
            <div className="w-1/3 bg-slate-200">
                <TitleCard />
                <PrecioCard />
                <Description />
                <StockCard />
                <ItemCount count={count} onAdd={onAdd} onDecrease={onDecrease} />
            </div>
        </div>
    )

}