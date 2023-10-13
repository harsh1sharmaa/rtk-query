import React, { useState } from "react";
import { useGetAllProductsQuery } from "../service/product";
import Cardgrid from "../components/Cardgrid";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigation = useNavigate();
  const access_token = useSelector((state) => state.user.access_token);
  // const [callAPi, setCallApi] = useState(false);

  console.log("45676754674365", access_token);
  if (!access_token) {
    navigation("/auth/login");
  }
  const { data, isError, isSuccess, isLoading, error } =
    useGetAllProductsQuery();

  return (
    <>
      {isSuccess && (
        <div className="grid grid-cols-4 gap-4">
          {data.map((item, idx) => {
            // return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
            return <Cardgrid item={item} />;
          })}
        </div>
      )}
    </>
  );
}

export default Home;
