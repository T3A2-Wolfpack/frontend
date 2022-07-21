import { useContext } from "react";
import { RetrieveWhiskeyFromApi } from "../axios/RetrieveWhiskeyFromApi";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "./Loading";
import { GlobalWhiskeyProvider } from "../hooks/GlobalWhiskey";
import { GlobalCommentProvider } from "../hooks/globalComment";
import RoutesComponent from "./RoutesComponent";

function App() {
  // state where we are pushing the newly added whiskey

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading type={"cylon"} color={"red"} />;
  }

  // // higher order component for showwhiskey

  return (
    <GlobalCommentProvider>
      <GlobalWhiskeyProvider>
        <RetrieveWhiskeyFromApi />
          <RoutesComponent />
      </GlobalWhiskeyProvider>
    </GlobalCommentProvider>
  );
}

export default App;
