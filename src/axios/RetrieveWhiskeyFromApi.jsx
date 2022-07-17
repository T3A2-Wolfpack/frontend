import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";


      // const { showWhiskeys, whiskeys } = useContext(GlobalWhiskeyContext);
      const api = import.meta.env.API_ENDPOINT || 'http://localhost:4000/api/whiskeys'

export function RetrieveWhiskeyFromApi() {
  const { showWhiskeys } = useContext(GlobalWhiskeyContext);
  try {
    useEffect(() => {
      async function retrieveWhiskeys() {
        const res = await axios.get(api);
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
      const res = axios.post(api, formState);
  } catch (error) {
    console.error(error);
  }
}

// If status = 200 dispatch global context.