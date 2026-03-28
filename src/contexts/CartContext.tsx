import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";

export type CartItemType = {
    id: number
    title: string
    category: string
    price: number
    quantity: number
}

export type CartProviderType ={
    cart: CartItemType[]
    addToCart: (product: CartItemType) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
}

const CartContext = createContext<CartProviderType | null>(null)

const CartReducer = (state: CartItemType[], action: any): CartItemType[] => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existing = state.find(item => item.id === action.payload.id)
            if (existing) {
                if (existing.quantity >= 20) {
                    return state
                }
                return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item)
            }
            return [...state, {...action.payload, quantity: 1}]
        }

        case 'REMOVE_FROM_CART': {
            const existing = state.find(item => item.id === action.payload)
            if (!existing) return state 
            if (existing.quantity === 1) {
                return state.filter(item => item.id !== action.payload)
            }
            return state.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
        }

        case 'CLEAR_CART': {
            return []
        }

        default: return state
    }
}

export default function CartContextProvider({ children }:{children:ReactNode}) {
    const [cart, dispatch] = useReducer(CartReducer, []) 

    const addToCart = (product: CartItemType) => {
        dispatch({type: "ADD_TO_CART", payload: product})
    }

    const removeFromCart = (id: number) => {
        dispatch({type: "REMOVE_FROM_CART", payload: id})
    }

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }
    
    return ( 
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) return
}