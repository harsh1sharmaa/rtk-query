import React, { useState } from "react";
import { useGetAllProductsQuery } from "../service/product";
import Cardgrid from "../components/Cardgrid";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { addToCart} from "../redux/features/cartSlice";


function Home() {
  const dispatch = useDispatch();

  const navigation = useNavigate();
  const access_token = useSelector((state) => state.user.access_token);
  const cartData = useSelector((state) => state.cart.cartData);
  console.log("cartData", cartData);
  // const [callAPi, setCallApi] = useState(false);

  console.log("45676754674365", access_token);
  if (!access_token) {
    navigation("/auth/login");
  }
  const { data, isError, isSuccess, isLoading, error } =
    useGetAllProductsQuery();

  const addToCart1 = (itemData) => {
    dispatch(addToCart(itemData));
    console.log("addToCart",itemData);
  };

  return (
    <>
      <NavBar />
      {isSuccess && (
        <div className="w-screen grid grid-cols-4 gap-4">
          {data.map((item, idx) => {
            // return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
            return <Cardgrid item={item} addToCart={addToCart1} />;
          })}
        </div>
      )}
    </>
  );
}

export default Home;
