import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const isOnline = useOnlineStatus();
  const [btnName, setbtnName] = useState("Login");
  const data = useContext(UserContext);
  console.log(data.loggedInUser);
  console.log(cartItems);
  return (
    <div className="header flex justify-between  b-2">
      <div className="logo-container">
        <img className="logo w-60 p-2 rounded-xl" src={LOGO_URL}></img>
      </div>
      <div className="nav-items items-center">
        <ul className="flex p-4 m-4">
          <li className="p-2.5 my-2.5 mx-1.5">
            Status: {isOnline ? "✅" : "🔴"}
          </li>
          <li className="p-2.5 my-2.5 mx-1.5 transition-all duration-300 hover:bg-gray-200 hover:scale-105 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2.5 my-2.5 mx-1.5 transition-all duration-300 hover:bg-gray-200 hover:scale-105 rounded-md">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2.5 my-2.5 mx-1.5 transition-all duration-300 hover:bg-gray-200 hover:scale-105 rounded-md">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2.5 my-2.5 mx-1.5 transition-all duration-300 hover:bg-gray-200 hover:scale-105 rounded-md">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2.5 my-2.5 mx-1.5 font-bold text-xl transition-all duration-300 hover:bg-blue-200 hover:scale-105 rounded-md">
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>
          <li className="transition-all duration-300 hover:bg-gray-200 hover:scale-105 rounded-md">
            <button
              className="login p-2.5 my-2.5 mx-1.5 "
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="p-2.5 my-2.5 mx-1.5 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
