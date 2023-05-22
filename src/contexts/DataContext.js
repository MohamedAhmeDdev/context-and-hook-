import React, { createContext,  useState  } from 'react'

export const DataContext = createContext({})

const handleDelete = async ()=> {
    console.log('dd');
}

export const DataProvider = ({ children }) =>{
    return(
        <DataContext.Provider value={{ handleDelete}}>
            {children}
        </DataContext.Provider>
    )
}



// export const CartContext = createContext();

// const [cartItems, setCartItems] = useState([]);


// const addToCart = (item) => {
//   setCartItems((prevItems) => [...prevItems, item]);
// };


// const removeFromCart = (itemId) => {
//   setCartItems((prevItems) =>
//     prevItems.filter((item) => item.id !== itemId)
//   );
// };

// const clearCart = () => {
//   setCartItems([]);
// };

// export const CartProvider = ({ children }) => {

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


