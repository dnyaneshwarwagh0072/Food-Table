import Items from "./Items";
const FoodItems = ({ items }) => {

    return (
        <>
            <ul className="list-group">
                {
                    items.map((item) => (
                        <Items key={item} foodItemList={item} />
                    ))
                }
            </ul>
        </>
    )
}
export default FoodItems;