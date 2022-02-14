import { useParams } from "react-router-dom";
import "./user.css";
import { userRows } from "../../data";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const data = userRows.filter((user) => user.id === Number(id));
  const [userData, setUserData] = useState(data[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type !== "file") {
      setUserData((prevVal) => {
        return {
          ...prevVal,
          [name]: value,
        };
      });
    } else {
      setUserData((prevVal) => {
        return {
          ...prevVal,
          [name]: e.target.files[0].name,
        };
      });
    }
  };
  return (
    <div className="user">
      <div className="user-header">
        <h1>Edit User</h1>
        <Link to="/newuser">
          <button>Create</button>
        </Link>
      </div>
      <div className="user-details">
        <div className="old-data">
          <div className="oldData-heading">
            <div className="title">
              <img src={userData.avatar} alt="user" className="oldData-image" />
              <div className="oldData-user">
                <span className="oldData-username">{userData.username} </span>
                <span className="oldData-title">Software Engineer</span>
              </div>
            </div>
            <div className="account">
              <h4>Account Details</h4>
              <div className="oldDataAccount-info">
                <PermIdentity className="oldData-Icon" />
                <span className="oldData-userTitle">annabeck49</span>
              </div>
              <div className="oldDataAccount-info">
                <CalendarToday className="oldData-Icon" />
                <span className="oldData-userTitle">10.12.1999</span>
              </div>
            </div>
            <div className="account">
              <h4>Contact Details</h4>
              <div className="oldDataAccount-info">
                <PhoneAndroid className="oldData-Icon" />
                <span className="oldData-userTitle">+1 123 456 789</span>
              </div>
              <div className="oldDataAccount-info">
                <MailOutline className="oldData-Icon" />
                <span className="oldData-userTitle">{userData.email}</span>
              </div>
              <div className="oldDataAccount-info">
                <LocationSearching className="oldData-Icon" />
                <span className="oldData-userTitle">New York | USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="edit-data">
          <h2>Edit</h2>

          <form className="editUser-data" onSubmit={handleSubmit}>
            <label className="user-label" htmlFor="username">
              Username
            </label>
            <br />
            <input
              className="edit-input"
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
            <br />
            <label className="user-label" htmlFor="email">
              Email
            </label>
            <br />
            <input
              className="edit-input"
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <br />
            <label className="user-label" htmlFor="email">
              Transaction
            </label>
            <br />
            <input
              className="edit-input"
              type="text"
              id="transaction"
              name="transaction"
              value={userData.transaction}
              onChange={handleChange}
            />
            <br />
            <div className="changeImage">
              <img
                src={userData.avatar}
                alt="avatar"
                className="oldData-image"
              />
              <label className="user-label" htmlFor="avatar">
                Change Profile Picture
                <Publish className="user-icon" onClick={handleChange} />
              </label>

              <input
                type="file"
                id="avatar"
                name="avatar"
                // value={userData.avatar}
                accept=".png, .jpg, .jpeg"
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
