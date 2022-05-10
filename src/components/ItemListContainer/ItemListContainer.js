import React from "react"
import Card from "../Card/Card"

export default function ItemListContainer({greeting}){
    return(
        <div className="h-screen bg-violet-500 flex flex-col justify-start items-center">
            <p className="text-xl font-semibold">Hola Como Estas: <span className="text-2xl font-bold text-green-400 cursor-pointer">{greeting}</span></p>
            <Card/>
        </div>
    )
}