import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalCommentContext } from "../hooks/globalComment";

// Get tastings for a whiskey
export function GetComments(id) {
  const { showComments } = useContext(GlobalCommentContext);
  try {
    useEffect(() => {
      const retrieveComments = async () => {
        const res = await axios.get(
          `http://localhost:4000/api/whiskeys/${id}/tastings`
        );
        await showComments(res.data);
      }
      retrieveComments();
    }, [PostComment]);
  } catch (error) {
    console.error(error);
  }
}

// Post a tasting for a whiskey
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

// Delete a tasting
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