import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalCommentContext } from "../hooks/globalComment";
import { useParams } from "react-router-dom";
import AddComment from "../components/comments/AddComment";

export function GetComments(id) {
  const { comments, showComments } = useContext(GlobalCommentContext);
  try {
    useEffect(() => {
      async function retrieveComments() {
        const res = await axios.get(
          `http://localhost:4000/api/whiskeys/${id}/tastings`
        );
        await showComments(res.data);
        // await showComments(res.data);
      }
      retrieveComments();
    }, [PostComment]);
  } catch (error) {
    console.error(error);
  }
}

export async function PostComment(id, comment, dispatch) {
  const response = await fetch(
    `http://localhost:4000/api/whiskeys/${id}/tastings`,
    {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  if (response.ok) {
    console.log("new tasting added:", json);
    dispatch(json);
  }
}

export async function DeleteComment(id, tasting_id, dispatch) {
  const response = await fetch(
    `http://localhost:4000/api/whiskeys/${id}/tastings/${tasting_id}`,
    {
      method: "DELETE",
    }
  );
  const json = await response.json();
  if (response.ok) {
    dispatch(json._id);
  }
}

