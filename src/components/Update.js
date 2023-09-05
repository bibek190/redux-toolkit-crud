import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();

  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);
  console.log(updateData);

  const newData = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <h2>Update the data</h2>
        <hr />
        <div className="mb-3 ">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData && updateData.name}
            onChange={newData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData && updateData.email}
            onChange={newData}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={updateData && updateData.age}
            onChange={newData}
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="male"
            type="radio"
            checked={updateData && updateData.gender === "male"}
            onChange={newData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="female"
            type="radio"
            checked={updateData && updateData.gender === "female"}
            onChange={newData}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
