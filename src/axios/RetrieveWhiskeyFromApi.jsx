import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";


// API connection point
const api =
  "https://frozen-bayou-80971.herokuapp.com/api/whiskeys" ||
  "http://localhost:4000/api/whiskeys";


  // Retrieve all whiskeys from database
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


// Post whiskey to database
export function PostRequest(formState) {
  try {
    axios.post(api, formState);
  } catch (error) {
    console.error(error);
  }
}


// Delete whiskey from database
export function DeleteWhiskey(id) {
  try {
    axios.delete(`${api}/${id}`)
  } catch (error) {
    console.error(error)
  }
}

// export function PatchWhiskey(id, whiskey) {
//   try {
//     axios.patch((`${api}/${id}`), whiskey)
//   } catch (error) {
//     console.error(error)
//   }
// }

export async function PatchWhiskey(id, whiskey) {
  const response = await fetch(`${api}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(whiskey),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  if (response.ok) {
    console.log("whiskey updated:", json);
  }
}



