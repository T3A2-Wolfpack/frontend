import { RetrieveWhiskeyFromApi } from "../axios/RetrieveWhiskeyFromApi";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "./Loading";

import { GlobalWhiskeyProvider } from "../hooks/GlobalWhiskey";
import { GlobalCommentProvider } from "../hooks/globalComment";
import RouteComponent from "./RouteComponent";

// define api from backend
const api = "http://localhost:4000/api/whiskeys";

function App() {
  // state where we are pushing the newly added whiskey

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading type={"cylon"} color={"red"} />;
  }

  return (
    <GlobalCommentProvider>
      <GlobalWhiskeyProvider>
        <RetrieveWhiskeyFromApi />
        <RouteComponent />
      </GlobalWhiskeyProvider>
    </GlobalCommentProvider>
  );
}

export default App;
