import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { FOODLOGO_URL, MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setshowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  let { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  if (itemCards === undefined) {
    itemCards =
      resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
        ?.categories[0].itemCards;
  }

  let { cards } = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  let categories = cards.filter((e) =>
    e.card.card["@type"].includes("ItemCategory")
  );

  console.log(categories);

  return (
    <div className="menu text-center">
      <h1 className="font-bold text-2xl my-6 mb-3">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h3 className="font-bold  text-lg">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(" || ")}
      </h3>
      <h3 className="font-bold  text-lg">
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h3>

      {categories.map((e, index) => {
        return (
          <RestaurantCategory
            key={e.card.card.title}
            data={e?.card?.card}
            showItems={index === showIndex}
            setshowIndex={() => setshowIndex(index)}
          />
        );
      })}

      <h2>Menu</h2>
      <ul>
        {itemCards.map((e) => (
          <li key={e.card.info.id}>
            {e.card.info.name}
            <br />
            Price : {e.card.info.defaultPrice / 100}
            <br />
            <img src={FOODLOGO_URL + e?.card?.info?.imageId}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
