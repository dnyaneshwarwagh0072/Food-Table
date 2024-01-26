const Items = ({foodItemList}) => {
    // console.log(foodItemList);
    return (
        <>
            <li className='list-group-item kg-item'><span className="item-span-css">{foodItemList}</span>
            <button className="btn btn-success" onClick={()=>console.log(`${foodItemList} is bought`)}>Search</button>
            </li>
        </>
    )
}
export default Items;