import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";


export function RetrieveWhiskeyFromApi() {
  const { showWhiskeys, whiskeys } = useContext(GlobalWhiskeyContext);
  try {
    useEffect(() => {
      async function retrieveWhiskeys() {
        const res = await axios.get("http://localhost:4000/api/whiskeys");
        await showWhiskeys(res.data);
      }
      retrieveWhiskeys();
    }, []);
  } catch (error) {
    console.error(error);
  }
}

export function PostRequest(formState) {
  try {
    const res = axios.post("http://localhost:4000/api/whiskeys", formState);
  } catch (error) {
    console.error(error);
  }
}


export default retrieveWhiskeyFromApi
