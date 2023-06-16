import React from "react";
import LoadingImage from "../assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={LoadingImage} alt="Loading" />
    </div>
  );
};

export default Loading;
