import React from "react";
import AdminUser from "./AdminUser";
import AdminAdmin from "./AdminAdmin";
import AdminNavbar from "./AdminNavbar";
import AdminMen from "./AdminMen";
import AdminWomen from "./AdminWomen";
import AdminKid from "./AdminKid";
import AdminShoes from "./AdminShoes";
import AdminBeauty from "./AdminBeauty";
import AdminBag from "./AdminBag";
import { Box } from "@chakra-ui/react";

const Admin = () => {
  return (
    <Box
      backgroundImage={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf92GKTYc1k5BNpApxHinSFKnIXNU9wI9rWyibtoBH_bgmWuVBg5SFKoareRSb7jBlLFo&usqp=CAU"
      }
    >
      <AdminNavbar />
      <hr />
      <AdminAdmin />
      <hr />
      <AdminUser />
      <hr />
      <AdminBag />
      <hr />
      <AdminBeauty />
      <hr />
      <AdminShoes />
      <hr />
      <AdminKid />
      <hr />
      <AdminWomen />
      <hr />
      <AdminMen />
    </Box>
  );
};

export default Admin;
