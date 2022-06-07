import CartIcon from "../Icons/CartIcon";

export default function CartWidget({cart}) {

    return (
        <div className="flex items-center justify-center">
            <CartIcon />
            {cart > 0 &&<span className="flex items-center justify-center w-8 h-8 bg-gray-600 rounded-full">
              <p className="text-2xl font-bold text-white ">{cart}</p>
            </span>}
        </div>
    )
}