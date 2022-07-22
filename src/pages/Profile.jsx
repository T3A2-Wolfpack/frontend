import { useAuth0 } from "@auth0/auth0-react";
import React from "react";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.nickname}</h2>
        <p>{user.email}</p>
        <p>{user.sub}</p>
        <p>{console.log(user)}</p>
      </div>
    ) : (
      <>
        <h1>Oops, you're not logged in!</h1>
        <div>log in button</div>
      </>
    )
  );
};

export default Profile;