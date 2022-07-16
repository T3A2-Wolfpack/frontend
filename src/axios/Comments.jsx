import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";

import { GlobalCommentContext } from "../hooks/globalComment";


export function GetComments() {
    const { comments } = useContext(GlobalCommentContext)
    try {
        useEffect(() => {
            async function retrieveComments() {
                axios.get(`http://localhost:4000/api/whiskeys/${id}/tastings`)
            }
            retrieveComments()
        })
    } catch (error) {
        console.error(error)
    }
}

