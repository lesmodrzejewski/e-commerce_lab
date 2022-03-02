import { useContext } from "react";
import BasketContext from '../context/BasketContext'

const AddToBasket = ({item}) => {

    const {shoppingBasket, setShoppingBasket} = useContext(BasketContext)

    const handleButtonClick = (event) => {
        const newList = [...shoppingBasket, item]

        setShoppingBasket(newList)
    }

    

    return ( 
        <button onClick={handleButtonClick}>Add to basket</button>
    );
}

export default AddToBasket;