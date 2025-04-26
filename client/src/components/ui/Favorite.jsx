import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

const Favorite = ({ active = false }) => {
  return active ? (
    <SolidHeartIcon className="h-6 w-6 text-red-500 hover:text-red-600 transition-colors" />
  ) : (
    <HeartIcon className="h-6 w-6 text-white hover:text-red-400 transition-colors" />
  );
};

export default Favorite;