import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import LoginButton from "../components/Login";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null)

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
        <p></p>    
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