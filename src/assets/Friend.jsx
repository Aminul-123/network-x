import React from "react";
import { Link } from "react-router-dom";

function Friend({ list }) {
  return (
    <Link to={`detail/${list.id}`} className="h-52 w-48 m-2 p-2  flex flex-col items-center border border-gray-300 cursor-pointer "

    >
      <img
        src={list.profileImg}
        alt="profileImg"
        className="h-36 w-36 rounded-full border border-red-500"
      />
      <span className="text-xl font-semibold">{list.name}</span>
      <span>{list.role}</span>
    </Link>
  );
}

export default Friend;
