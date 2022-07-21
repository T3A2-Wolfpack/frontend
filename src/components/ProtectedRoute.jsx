import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { Loading } from "./Loading" 

// Protected route
export const ProtectedRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading type={'cylon'} color={'red'} />,
  });

  return <Component />;
};




