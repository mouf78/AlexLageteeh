// components/AuthWrapper.js
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const AuthWrapper = ({ children }) => {
  const { user, isLoading, error } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!user) {
    return <h1>Please log in</h1>;
    
  }

  return <>{children}</>;
};

export default AuthWrapper;
