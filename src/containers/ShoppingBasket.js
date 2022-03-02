import { useContext } from "react";
import BasketContext from "../context/BasketContext";
import Item from "../components/Item"

const ShoppingBasket = () => {

    const {shoppingBasket} = useContext(BasketContext)

    let i = 0;

    const shoppingBasketNodes = shoppingBasket.map((item) => {
        i+=1;
        return (
            <div key={i}>
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