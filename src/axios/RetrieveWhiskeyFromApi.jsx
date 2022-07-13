import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";

function retrieveWhiskeyFromApi() {

    const { showWhiskeys, whiskeys } = useContext(GlobalWhiskeyContext);

  useEffect(() => {
    async function retrieveWhiskeys() {
      const res = await axios.get("http://localhost:4000/api/whiskeys");
      showWhiskeys()
      console.log(res.data)
    }
    retrieveWhiskeys();
  }, []);
  return <div></div>;
}


export default retrieveWhiskeyFromApi
