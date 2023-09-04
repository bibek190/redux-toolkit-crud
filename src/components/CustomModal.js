import React from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({ id, showPopup, setShowPopup }) => {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((ele) => ele.id === id);
  console.log(singleUser);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          onClick={() => {
            setShowPopup(false);
          }}
        >
          Close❌
        </button>
        <h1>{singleUser[0].name}</h1>
        <h2>{singleUser[0].email}</h2>
        <h3>{singleUser[0].age}</h3>
        <h4>{singleUser[0].gender}</h4>
      </div>
    </div>
  );
};

export default CustomModal;
