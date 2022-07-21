import { RetrieveWhiskeyFromApi } from "../axios/RetrieveWhiskeyFromApi";


import {
  GlobalWhiskeyContext,
  GlobalWhiskeyProvider,
} from "../hooks/GlobalWhiskey";
import {
  GlobalCommentContext,
  GlobalCommentProvider,
} from "../hooks/globalComment";
import { AuthContextProvider } from "../context/AuthContext";
import RouteComponent from "./RouteComponent";

// define api from backend
const api = "http://localhost:4000/api/whiskeys";

function App() {
  // state where we are pushing the newly added whiskey


  // if (isLoading) {
  //   return <Loading type={"cylon"} color={"red"} />;
  // }

  return (
    <AuthContextProvider>
      <GlobalCommentProvider>
        <GlobalWhiskeyProvider>
          <RetrieveWhiskeyFromApi />
          <RouteComponent />
        </GlobalWhiskeyProvider>
      </GlobalCommentProvider>
    </AuthContextProvider>
  );
}

export default App;
