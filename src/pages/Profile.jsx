import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "../components/Login";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.sub}</p>
      </div>
    ) : (
      <>
        <h1>Oops, you're not logged in!</h1>
        <LoginButton className="lg:btn" />
      </>
    )
  );
};

export default Profile;