import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";



function EditAWhiskey() {
  let nav = useNavigate();

  const { whiskeys, editWhiskey } = useContext(GlobalWhiskeyContext);

  const { id } = useParams();

  const [selectedWhiskey, setSelectedWhiskey] = useState({
    id: null,
    name: "",
    age: "",
    region: "",
    type: "",
    budget: "",
  })
  
  const currentWhiskeyId = whiskeys.map()

  useEffect(() => {
    if (whiskeys.length >= 0) {
      const whiskeyId = currentWhiskeyId
      const selectWhiskey = whiskeys.find((currentWhiskey) => currentWhiskey.id === whiskeyId.id)
      const selectedWhiskey = selectWhiskey
      setSelectedWhiskey(selectedWhiskey)

    } else {
      return undefined
    }
  }, [currentWhiskeyId, whiskeys])



  const onSubmit = (e) => {
    e.preventDefault();
    editWhiskey(selectedWhiskey)
  };

  const onChangeHandler = (key, value) =>
    setSelectedWhiskey({...selectedWhiskey, [key]: value})

  return (
    <>
      <div>Edit Whiskey</div>
      <form onSubmit={onSubmit}>
        <div>
          <h2>Whiskey name</h2>
          <textarea
            cols="20"
            rows="1"
            name="name"
            value={ selectedWhiskey.name }
            onChange={(e) => onChangeHandler("name", e.target.value)}
          ></textarea>
        </div>
        {/* <div>
          <h2>Whiskey age</h2>
          <textarea
            cols="20"
            rows="1"
            name="age"
            value={selectedWhiskey.age}
            onChange={(e) => onChangeHandler("age", e.target.value)}
          ></textarea>
        </div>
        <div>
          <h2>Region</h2>
          <textarea
            cols="20"
            rows="1"
            name="region"
            value={selectedWhiskey.region}
            onChange={(e) => onChangeHandler("region", e.target.value)}
          ></textarea>
        </div>
        <div>
          <h2>Type</h2>
          <textarea
            cols="20"
            rows="1"
            name="type"
            value={selectedWhiskey.type}
            onChange={(e) => onChangeHandler("type", e.target.value)}
          ></textarea>
        </div>
        <div>
          <h2>Budget</h2>
          <textarea
            cols="20"
            rows="1"
            name="budget"
            value={selectedWhiskey.budget}
            onChange={(e) => onChangeHandler("budget", e.target.value)}
          ></textarea>
        </div> */}
        <button>Edit whiskey</button>
        <div>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </>
  );
}

export default EditAWhiskey;
