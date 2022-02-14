import "./Topbar.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">SSAdmin</div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profile"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
