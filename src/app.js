import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
// import { appStore } from "./utils/appStore";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";

const styleCard = {
  backgroundColor: "gray",
};

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  return (
    <BrowserRouter basename="/React">
      <Provider store={appStore}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

// const AppLayout = () => {
//   const [userName, setUserName] = useState();

//   //authentication
//   useEffect(() => {
//     // Make an API call and send username and password
//     const data = {
//       name: "Akshay Saini",
//     };
//     setUserName(data.name);
//   }, []);

//   return (
//     <Provider store={appStore}>
//       <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
//         <div className="app">
//           <Header />
//           <Outlet />
//         </div>
//       </UserContext.Provider>
//     </Provider>
//   );
// };

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
