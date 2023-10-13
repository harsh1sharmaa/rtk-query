import React from "react";

function Toast({ message, type }) {
  const toastClass = getTypeClass(type);

  function getTypeClass(type) {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  }

  return (
    <div
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 p-3 rounded-lg text-white text-center w-60 z-50 ${toastClass} shadow-md`}
    >
      {message}
    </div>
  );
}

export default Toast;
