import { useState} from "react";
import InventoryList from "./InventoryList";
import ShoppingBasket from "./ShoppingBasket";
import BasketContext from "../context/BasketContext"

const MainContainer = () => {

    const [shoppingBasket, setShoppingBasket] = useState([])

    const inventoryList =			
        [
            {
            id: 1,
            product: "Water",
            price: "£1.00"
            },
            {
            id: 2,
            product: "Beans",
            price: "£0.60"
            },
            {
            id: 3,
            product: "Eggs",
            price: "£1.20"
            }
        ];

    return( 
        <>
            <BasketContext.Provider value={{shoppingBasket, setShoppingBasket}}>
                <h1>Inventory:</h1>
                <InventoryList inventoryList={inventoryList}/>
                <h1>Basket:</h1>
                <ShoppingBasket/>
            </BasketContext.Provider>
        </>
     )

}

export default MainContainer;