export default function ItemListContainer({greeting}){
    return(
        <div className="flex items-center justify-center h-screen bg-violet-500">
            <p className="text-xl font-semibold">Hola Como Estas: <span className="text-2xl font-bold text-green-400 cursor-pointer">{greeting}</span></p>
        </div>
    )
}