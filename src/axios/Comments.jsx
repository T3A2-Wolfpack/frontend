import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalCommentContext } from "../hooks/globalComment";
import { useParams } from "react-router-dom";

// const { comments, showComments } = useContext(GlobalCommentContext)
const api = import.meta.env.API_ENDPOINT || 'http://localhost:4000/api/whiskeys'

export function GetComments(id) {
  const { showComments } = useContext(GlobalCommentContext)
  
  try {
    useEffect(() => {
      async function retrieveComments() {
        res = await axios.get(
          `${api}/${id}/tastings`
        );
        await showComments;
      }
      retrieveComments();
    }), [];
  } catch (error) {
    console.error(error);
  }
}
