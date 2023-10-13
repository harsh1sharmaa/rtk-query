// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";

function Cardgrid({ item }) {
  // console.log("props");
  // console.log(item);

  const goToDetails = (id) => {
    console.log("card clicked ", id);
    // console.log("card clicked ")
  };
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg "
      onClick={() => goToDetails(item.id)}
      key={item.id}
    >
      <img
        className="w-full object-contain h-48 w-96"
        src={item?.image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="text-base font-bold mb-2">{item?.title}</div>
        <p className="text-sm text-white-700 text-base truncate ">
          {item?.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sx font-semibold text-gray-700 mr-2 mb-2">
          price : {item?.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sx font-semibold text-gray-700 mr-2 mb-2">
          rating : {item?.rating?.rate}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sx font-semibold text-gray-700 mr-2 mb-2">
          category : {item?.category}
        </span>
      </div>
    </div>
  );
}

export default Cardgrid;
