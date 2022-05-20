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
            <ItemCount stock={item?.stock} initial={1} />
            </div>
        </div>
    )

}