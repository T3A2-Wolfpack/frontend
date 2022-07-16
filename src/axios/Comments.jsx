import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalCommentContext } from "../hooks/globalComment";
import { useParams } from "react-router-dom";


export function GetComments() {

    const { comments } = useContext(GlobalCommentContext)
    const { id } = useParams
    try {
        useEffect(() => {
            async function retrieveComments() {
                await axios.get(`http://localhost:4000/api/whiskeys/${id}/tastings`)
            }
            retrieveComments()
        }, [])
    } catch (error) {
        console.error(error)
    }
}

