import { useState, useEffect } from "react";
import InventoryList from "./InventoryList";
import ShoppingBasket from "./ShoppingBasket";
import BasketContext from "../context/BasketContext"

const MainContainer = () => {

    const [shoppingBasket, setShoppingBasket] = useState([])

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
            {/* <BasketContext.Provider= {id, product, price}> */}
                <InventoryList inventoryList={inventoryList} />
            <h1>Basket:</h1>
            {/* <BasketContext.Consumer={id, product, price}> */}
                <ShoppingBasket shoppingBasket={shoppingBasket}/>
            

        </>
     )

}

export default MainContainer;