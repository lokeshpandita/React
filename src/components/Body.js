import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const apiListOfRest =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    console.log(apiListOfRest);
    setlistOfRestaurants(apiListOfRest);
    setfilteredRestaurants(apiListOfRest);
  };

  const isOnline = useOnlineStatus();

  if (isOnline === false) {
    return <h1>You are offline! Kindly check your connection.</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(a) => {
              setsearchText(a.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const searchRestros = listOfRestaurants.filter((a) =>
                a.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(searchRestros);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info?.avgRating > 4;
            });
            setfilteredRestaurants(filteredList);
            console.log(
              filteredList.map((res) => {
                return res.info?.avgRating;
              })
            );
          }}
        >
          Top Rated Restraunts
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((a) => (
          <Link
            to={"http://localhost:1234/restaurants/" + a.info.id}
            key={a.info?.id}
          >
            <RestroCard resData={a} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
