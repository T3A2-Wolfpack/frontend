import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalWhiskeyContext } from "../Hooks/GlobalWhiskey";

function retrieveWhiskeyFromApi() {

    const { showWhiskeys, whiskeys } = useContext(GlobalWhiskeyContext);

  useEffect(() => {
    async function retrieveWhiskeys() {
      const res = await axios.get("http://localhost:4000/api/whiskeys");
      console.log(res.data)
    }
    retrieveWhiskeys();
  }, [whiskeys]);
  return <div></div>;
}


export default retrieveWhiskeyFromApi
