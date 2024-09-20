import { useDispatch } from "react-redux";
import { FOODLOGO_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      {props.items.map((e) => {
        return (
          <div
            className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
            key={e.card.info.id}
          >
            <div className="w-9/12 p-4">
              <div>
                <div className="pr-2">{e.card.info.name} </div>
                <div>
                  ₹
                  {e.card.info.price
                    ? e.card.info.price / 100
                    : e.card.info.defaultPrice}{" "}
                </div>
              </div>
              <div>
                <span>{e.card.info.description} </span>
              </div>
            </div>
            <div className="w-3/12 relative m-2">
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 rounded-2xl">
                <button
                  className="px-4 bg-white shadow-lg rounded-2xl"
                  onClick={() => dispatch(addItems(e))}
                >
                  Add +
                </button>
              </div>
              <img
                src={FOODLOGO_URL + e?.card?.info?.imageId}
                className=""
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
