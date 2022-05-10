import React from "react"

export default function ItemCount({stock, initial}){
const [count,setCount]=React.useState(initial)

const OnAdd=()=>{
    if(count<stock){
        setCount(count+1)
    }
}
const OnDecrease=()=>{
    if(count>1){
        setCount(count-1)
    }
}

    const StockButton=({handleOnClick, text})=>{
        return(
               <button onClick={handleOnClick} className="text-white bg-gray-800 text-lg px-2">
            {text}
        </button>
        )   
    }

    const AddButton=()=>{
        return(
            <button className="text-white rounded-lg bg-gray-800 text-lg px-2">Agregar al carrito</button>
        )
    }

    return(
        <div className="Add-button-container flex flex-col items-center justify-center">
            <div className="flex items-center justify-center pb-1">
                <StockButton text="-" handleOnClick={OnDecrease}/>
                 <div className="text-xl font-bold px-2">{count}</div>
                <StockButton text="+" handleOnClick={OnAdd}/>
            </div>
            <AddButton/>
        </div>
    )
}