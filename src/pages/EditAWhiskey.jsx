import React, { useContext, useEffect, useReducer } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { GlobalWhiskeyContext } from "../Hooks/GlobalWhiskey";
import formReducer from "../Hooks/formReducer";

const initialFormState = {
  id: "",
  name: "",
  age: "",
  region: "",
  type: "",
  budget: "",
};

function EditAWhiskey() {
  let nav = useNavigate();

  const { whiskeys, editWhiskey } = useContext(GlobalWhiskeyContext);

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const { id } = useParams();

  useEffect(() => {
    const edit = whiskeys.find(
      (currentWhiskey) => currentWhiskey.id === Number(whiskeys[id])
    );
    console.log(edit);
  }, [whiskeys[id]]);

  const handleTextInput = (e) => {
    dispatch({
      type: "TEXT_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formState.id)
    // console.log(whiskeys[id])
    editWhiskey(formState);
    console.log(whiskeys)
  };

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
            value={formState.name}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <h2>Whiskey age</h2>
          <textarea
            cols="20"
            rows="1"
            name="age"
            value={formState.age}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <h2>Region</h2>
          <textarea
            cols="20"
            rows="1"
            name="region"
            value={formState.region}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <h2>Type</h2>
          <textarea
            cols="20"
            rows="1"
            name="type"
            value={formState.type}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <h2>Budget</h2>
          <textarea
            cols="20"
            rows="1"
            name="budget"
            value={formState.budget}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <button>Edit whiskey</button>
        <div>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </>
  );
}

export default EditAWhiskey;
