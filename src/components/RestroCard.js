import { CDN_URL } from "../utils/constants.js";

const RestroCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card m-4 mb-12 border-2 w-[200] rounded-2xl h-[500] bg-slate-200 hover:bg-slate-400 transform transition-transform duration-300 hover:scale-110">
      <img
        className="res-logo rounded-2xl m-2 w-[180] h-[240]"
        src={CDN_URL + resData.info?.cloudinaryImageId}
        alt="res-logo"
      ></img>
      <div className="p-4 ">
        <h3 className="font-bold">{resData.info?.name}</h3>
        <h4>{resData.info?.avgRating}</h4>
        <h4>{resData.info?.cuisines.join(", ")}</h4>
        <h4>{resData.info?.sla.deliveryTime + " mins"}</h4>
      </div>
    </div>
  );
};

export const isOpen = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="mx-4 px-2 py-1 rounded-lg bg-black text-white">
          OPEN
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
