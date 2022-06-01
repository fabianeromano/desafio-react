import React, {
    createContext,
    useState
} from 'react'

export const CartContext = createContext({})

export default function CartProvider({
    children
}) {
    const [cart, setCart] = useState([])

    function addItem(item, quantity) {
        // existe
        if (isInCart(item.id)) {
            setCart(cart.map(itemInCart => (
               itemInCart.id === item.id ?
                {...itemInCart, quantity: itemInCart.quantity + quantity}
                : itemInCart
            )))
        } else {
            // no existe
            setCart([...cart, {
                ...item,
                quantity
            }])
        }
    }

    function removeItem(id) {
        setCart(cart.filter(item => item.id !== id))
    }

    function isInCart(id) {
        return cart.filter(item => item.id === id).length > 0
    }

    function clear() {
        setCart([])
    }

    return ( 
        <CartContext.Provider value = {
            {
                cart,
                addItem,
                removeItem,
                isInCart,
                clear
            }
        }> {
            children
        }
        </CartContext.Provider>
    )
}