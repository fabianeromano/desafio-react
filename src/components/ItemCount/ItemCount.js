import React from "react"

export default function ItemCount({stock, initial}){
const [count,setCount]=React.useState(initial)

const onAdd=()=>{
    if(count<stock){
        setCount(count+1)
    }
}
const onDecrease=()=>{
    if(count>1){
        setCount(count-1)
    }
}

    const StockButton=({handleOnClick, text})=>{
        return(
               <button onClick={handleOnClick} className="w-10 h-10 text-3xl text-white bg-gray-800 rounded-full hover:text-gray-800 hover:bg-white">
            {text}
        </button>
        )   
    }

    const AddButton=()=>{
        return(
            <button className="px-4 py-2 text-3xl tracking-widest text-white bg-gray-800 rounded-full hover:bg-white hover:text-gray-800 ">Agregar al carrito</button>
        )
    }

    return(
        <div className="flex flex-col items-center justify-center Add-button-container">
            <div className="flex items-center justify-center pb-1">
                <StockButton text="-" handleOnClick={onDecrease}/>
                 <div className="mx-2 text-2xl font-bold">{count}</div>
                <StockButton text="+" handleOnClick={onAdd}/>
            </div>
            <AddButton/>
        </div>
    )
}