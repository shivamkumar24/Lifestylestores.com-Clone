import React from "react";
import "../../styles/AdminNavbar.css";
import { Link as ScrollLink } from "react-scroll";

const AdminNavbar = () => {
  return (
    <div className="mainAdminDiv">
      <ScrollLink to="admin" smooth={true} duration={500}>
        <div className="adminDiv">Admin</div>
      </ScrollLink>
      <ScrollLink to="user" smooth={true} duration={500}>
        <div className="adminDiv">User</div>
      </ScrollLink>
      <ScrollLink to="bag" smooth={true} duration={500}>
        <div className="adminDiv">Bag</div>
      </ScrollLink>
      <ScrollLink to="beauty" smooth={true} duration={500}>
        <div className="adminDiv">Beauty</div>
      </ScrollLink>
      <ScrollLink to="women" smooth={true} duration={500}>
        <div className="adminDiv">Women</div>
      </ScrollLink>
      <ScrollLink to="men" smooth={true} duration={500}>
        <div className="adminDiv">Men</div>
      </ScrollLink>
      <ScrollLink to="kid" smooth={true} duration={500}>
        <div className="adminDiv">Kid</div>
      </ScrollLink>
      <ScrollLink to="shoes" smooth={true} duration={500}>
        <div className="adminDiv">Shoes</div>
      </ScrollLink>
    </div>
  );
};

export default AdminNavbar;
