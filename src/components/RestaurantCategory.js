import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  // const [showItems, setshowItems] = useState(false);

  const handleClick = () => {
    props.setshowIndex();
  };
  return (
    <div>
      <div className="m-full mx-auto my-4 bg-gray-50 shadow-lg p-4 w-6/12">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {props.data.title}({props?.data?.itemCards?.length})
          </span>
          <span>▼</span>
        </div>
        {props.showItems && <ItemList items={props.data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
