import { useContext } from "react";
import BasketContext from "../context/BasketContext";
import Item from "../components/Item"

const ShoppingBasket = () => {

    const {shoppingBasket} = useContext(BasketContext)

    const shoppingBasketNodes = shoppingBasket.map((item) => {

        return (
            <div key={Date.now()}>
                <Item product={item.product} price={item.price} />
            </div>

        );
    });

    return (

        <>
            {shoppingBasketNodes}
        </>
    );       
    

}

export default ShoppingBasket;