import Item from "../components/Item.js";
import AddToBasket from "../components/AddToBasket.js";




const InventoryList = ({inventoryList}) => {

    const inventoryItemNodes = inventoryList.map((item) => {
        return (
            <div key={item.id}>
                <Item  product={item.product} price={item.price} />
                <AddToBasket item={item}/>
            </div>

        );
    });

    return (

        <>
            {inventoryItemNodes}
        </>
    );
}

export default InventoryList;