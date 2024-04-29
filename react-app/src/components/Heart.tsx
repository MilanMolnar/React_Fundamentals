import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoHeartDislikeOutline } from "react-icons/io5";

interface Props {
  heartSize?: number;
  onClick: () => void;
  initialStatus: boolean;
}

const Heart = ({ initialStatus, onClick, heartSize = 50 }: Props) => {
  const [heartStatus, setHeartStatus] = useState(initialStatus);

  const toggle = () => {
    setHeartStatus(!heartStatus);
    onClick();
  };

  return (
    <div role="button" onClick={toggle}>
      {heartStatus ? (
        <AiFillHeart color="red" size={heartSize} />
      ) : (
        <IoHeartDislikeOutline size={heartSize} />
      )}
    </div>
  );
};

export default Heart;
