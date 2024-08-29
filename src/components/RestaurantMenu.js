import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { FOODLOGO_URL, MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL + resId);
  //   const json = await data.json();
  //   setresInfo(json.data);
  // };

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

  console.log(itemCards);

  return (
    // <h1>Hello</h1>
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(" || ")}</h3>
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
