import React from "react";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const PrivateRouteAdmin = ({ children }) => {
  const toast = useToast();
  const token = localStorage.getItem("admin-token");
  if (token) {
    return children;
  } else {
    return (
      <>
        {toast({
          title: "Please login as admin to procced !",
          status: "error",
          duration: 5000,
          isClosable: true,
        })}
        <Navigate to={"/adminLogin"} />
      </>
    );
  }
};

export default PrivateRouteAdmin;
