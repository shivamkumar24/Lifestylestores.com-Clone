import React from "react";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function PrivateRoute({ children }) {
  const toast = useToast();
  const token = localStorage.getItem("user-token");
  if (token) {
    return children;
  } else {
    return (
      <>
        {toast({
          title: "Please login as user to procced !",
          status: "error",
          duration: 5000,
          isClosable: true,
        })}
        <Navigate to={"/login"} />
      </>
    );
  }
}

export default PrivateRoute;
