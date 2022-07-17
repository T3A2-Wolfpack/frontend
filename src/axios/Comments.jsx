import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalCommentContext } from "../hooks/globalComment";

export function GetComments(id) {
  const { comments, showComments } = useContext(GlobalCommentContext);
  try {
    useEffect(() => {
      async function retrieveComments() {
        const res = await axios.get(
          `http://localhost:4000/api/whiskeys/${id}/tastings`
        )
        await showComments(res.data)
        // await showComments(res.data);
      }
      retrieveComments();
    }, [])
  } catch (error) {
    console.error(error);
  }
}

// export function PostComments() {

// }