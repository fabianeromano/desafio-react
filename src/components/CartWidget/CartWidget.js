
export default function CartWidget({count}) {

    return (
        <div className="flex items-center justify-center">
            <img className="w-10 h-10"  src="/img/Cart.png" alt="Imagen Cart"/>
            <span className="flex items-center justify-center w-8 h-8 bg-green-400 rounded-full">
             <p className="text-2xl font-bold text-white ">{count}</p>
            </span>
        </div>
    )
}