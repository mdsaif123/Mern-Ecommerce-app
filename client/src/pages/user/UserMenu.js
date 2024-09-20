import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <div className="list-group">
        <div className="text-center">
          <h4 className="text-center text-secondary">User profile</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
           Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            My Order
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
