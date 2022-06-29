import React from "react";
import Item from "../Item/Item";

export default function ItemList({ListaProductos}) {

    return (
        <div>
            <h3 className="text-4xl font-bold text-center">Nuestros Productos</h3>
            <div className="flex ">
            {ListaProductos.map((producto) => 
                <Item producto={producto} key={producto.id} />
            )}

        </div>
        </div>
        

    )

}