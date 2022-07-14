import Whiskeys from "./Whiskeys";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { useContext, useReducer, useState } from "react";
import formReducer from "../hooks/formReducer";

const api = 'http://localhost:4000/api/whiskeys'

const initialFormState = {
  id: "",
  name: "",
  age: "",
  region: "",
  type: "",
  budget: "",
};

function NewWhiskey() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")

  const { addWhiskey, whiskeys } = useContext(GlobalWhiskeyContext);

  const postDetails = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "whiskeyImage")
    data.append("cloud_name", "sonny949")
    fetch("https://api.cloudinary.com/v1_1/sonny949/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        setUrl(data.url)
        console.log(url)
      })
      .catch(err => {
        console.log(err)
      })

    fetch(api, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: formState.name,
        age: formState.age,
        region: formState.region,
        type: formState.type,
        price: formState.budget,
        image: url
      })
    })
      .then(() => console.log(url))
  }

  const handleTextInput = (e) => {
    dispatch({
      type: "TEXT_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  let nav = useNavigate();

  async function formSubmit(e) {
    e.preventDefault();
    formState.id = whiskeys.length
    await addWhiskey(formState);
    await postDetails(url)
    nav("/whiskeys");
  }

  return (
    <>
      <div>New Whiskey</div>
      <form onSubmit={formSubmit}>
        <div>
          <h2>Whiskey name</h2>
          <textarea
            required
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
            required
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
            required
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
            required
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
            required
            cols="20"
            rows="1"
            name="budget"
            value={formState.budget}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <button>Image</button>
          <input
            required
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button onClick={() => postDetails()}>Add whiskey</button>
        <div>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </>
  );
}

export default NewWhiskey;
