import React, { useContext, useEffect } from 'react'
import { GlobalWhiskeyContext } from '../Hooks/GlobalWhiskey'

function EditWhiskey() {

    const { whiskeys, editWhiskey } = useContext(GlobalWhiskeyContext)

  return (
    <div>EditWhiskey</div>
  )
}

export default EditWhiskey