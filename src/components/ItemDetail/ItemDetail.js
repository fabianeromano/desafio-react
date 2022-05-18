import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail({ item }) {

    const ImgCard = () => {
        return (
            <div className="w-48 overflow-hidden h-60 rounded-xl">
                <img className="w-48 h-60" src={item.image} alt={item.title} />
            </div>)
    }
    const TitleCard = () => {
        return (
            <p className="text-2xl font-bold">{item.title}</p>
        )
    }

    const PrecioCard = () => {
        return (
            <p className="text-2xl font-bold">${item.price}</p>
        )
    }
    const StockCard = () => {
        return (
            <p className="text-xl font-semibold">Stock: {item.stock}</p>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center w-64 py-2 bg-white h-96 rounded-2xl">

            <ImgCard />
            <TitleCard />
            <PrecioCard />
            <StockCard />
            <ItemCount stock={item.stock} initial={1} />

        </div>

    )

}