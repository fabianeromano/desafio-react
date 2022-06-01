import React from "react"
import { useNavigate } from "react-router-dom"

export default function ItemCount({count, onAdd, onDecrease, onBuyItem}){

    const navigate = useNavigate();
    
    const StockButton=({handleOnClick, text})=>{
        return(
               <button onClick={handleOnClick} className="w-10 h-10 text-3xl text-white bg-gray-800 rounded-full hover:text-gray-800 hover:bg-white">
            {text}
        </button>
        )   
    }

    const BuyButton = () =>{
        const handleBuyClick = () => {
            onBuyItem()
            navigate(`/cart`)
        }
        return (
            <button className="px-4 py-2 text-3xl tracking-widest text-white bg-gray-800 rounded-full hover:bg-white hover:text-gray-800" onClick={handleBuyClick}>Comprar</button>
        )
    }

    return(
        <div className="flex flex-col items-center justify-center Add-button-container">
            <div className="flex items-center justify-center pb-1">
                <StockButton text="-" handleOnClick={() => onDecrease(1)}/>
                 <div className="mx-2 text-2xl font-bold">{count}</div>
                <StockButton text="+" handleOnClick={() => onAdd(1)}/>
            </div>
            <BuyButton/>
        </div>
    )
}