import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { addToCart } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllPostQuery, useGetPostbyIdQuery } from "./service/post";
import { useGetAllProductsQuery } from "./service/product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";

function App() {
  // const dispatch = useDispatch();
  // const data = {
  //   'name':'ABC',
  //   'rew':'56t7u',
  //   'na34me':'6',
  // }
  // const cartData = useSelector((state) => state.allCart);
  // console.log("data",cartData);
  // const postresponse = useGetAllPostQuery();
  // console.log("postresponse");
  // console.log(postresponse.data);
  /*  const { data, isError, isSuccess, isLoading, error } = useGetAllProductsQuery();
  console.log("response");
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...{error.error}</div>;
  } */
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} /> */}
          <Route element={<NavBar />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/products" element={<Produc />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/home/:id" element={<Details />} />
          </Route>
          <Route
            path="/auth/*"
            element={
              <>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </>
            }
          />
        </Routes>
      </Router>
      {/* {isSuccess && (
        <div>
          {data.map((item, idx) => {
            return (
              <div key={idx}>
                hello world
                <h4>id : {item.id} title :  {item.title}</h4>
                <div style={{ padding: "5px", margin: "50px" }} >
                  {item.body}
                </div>
              </div>
            );
          })}
        </div>
      )} */}
      {/* Hello */}
      {/* <button onClick={() => dispatch(addToCart(data))}>addToCart</button> */}
    </>
  );
}

export default App;
