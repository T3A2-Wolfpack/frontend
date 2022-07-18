import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalCommentContext } from "../hooks/globalComment";
import { useParams } from "react-router-dom";

export function GetComments(id) {
  const { comments, showComments } = useContext(GlobalCommentContext);
  try {
    useEffect(() => {
      async function retrieveComments() {c
        const res = await axios.get(
          `http://localhost:4000/api/whiskeys/${id}/tastings`
        );
        await showComments(res.data);
        // await showComments(res.data);
      }
      retrieveComments();
    }, []);
  } catch (error) {
    console.error(error);
  }
}

export function PostComment(id, comment) {
  try {
    axios.post(`http://localhost:4000/api/whiskeys/${id}/tastings`, comment);
  } catch (error) {
    console.error(error);
  }
}

// export function PostComments() {

// }
