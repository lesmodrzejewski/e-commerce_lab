import Item from "../components/Item.js";

const InventoryList = ({inventoryList}) => {

    const commentNodes = inventoryList.map((item) => {
        return (
            <Item key={item.id} product={item.product} price={item.price} />
        );
    });

    return (
        <>
            {commentNodes}
        </>
    );
}

export default InventoryList;