import { useState, useEffect } from "react";
import InventoryList from "./InventoryList";
import ShoppingBasket from "./ShoppingBasket";

const MainContainer = () => {

    // const [shoppingList, setShoppingList] = useState([])

    const [inventoryList, setInventoryList] = useState (				
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
        ]
    );

    return( 
        <>
            <h1>Inventory:</h1>
            <InventoryList inventoryList={inventoryList} />
            <h1>Basket:</h1>
            <ShoppingBasket />
        </>
     )

}

export default MainContainer;